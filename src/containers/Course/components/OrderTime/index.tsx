import { useState } from 'react';
import {
  Button, Col, Drawer, Row, Space, Tabs, message,
} from 'antd';
import { EditableProTable } from '@ant-design/pro-components';
import { ChromeOutlined, RedoOutlined } from '@ant-design/icons';
import _ from 'lodash';
import { IOrderTime } from '@/utils/types';
import {
  DAYS, IDay, getColumns, getMaxKey, isWorkDay,
} from './constants';
import { useOrderTime } from './hooks';

import style from './index.module.less';

interface IProps {
  id: string;
  onClose: (isReload?: boolean) => void;
}
/**
* 可约时间
*/
const OrderTime = ({
  onClose,
  id,
}: IProps) => {
  const [currentDay, setCurrentDay] = useState<IDay>(DAYS[0]);
  const onTabChangeHandler = (key: string) => {
    const current = DAYS.find((item) => item.key === key) as IDay;
    setCurrentDay(current);
  };

  const {
    orderTime,
    loading,
    onDeleteHandler,
    onSaveHandler,
    allWeekSyncHandler,
    allWorkDaySyncHandler,
  } = useOrderTime(id, currentDay.key);

  return (
    <Drawer
      title="编辑预约时间"
      width={720}
      open
      onClose={() => onClose()}
    >
      <Tabs
        type="card"
        items={DAYS}
        onChange={onTabChangeHandler}
      />
      <EditableProTable<IOrderTime>
        headerTitle={(
          <Space>
            选择
            <span className={style.name}>
              {currentDay.label}
            </span>
            的课开放预约的时间
          </Space>
        )}
        loading={loading}
        rowKey="key"
        recordCreatorProps={{
          record: () => ({
            key: getMaxKey(orderTime) + 1,
            startTime: '12:00:00',
            endTime: '12:30:00',
          }),
        }}
        value={orderTime}
        columns={getColumns(onDeleteHandler)}
        editable={{
          onSave: async (rowKey, d) => {
            let newData = [];

            const startTime = new Date(`1970-01-01 ${d.startTime}`);
            const endTime = new Date(`1970-01-01 ${d.endTime}`);

            if (startTime >= endTime) {
              message.warning('结束时间必须晚于开始时间');
              return;
            }
            if (orderTime.findIndex((item) => item.key === rowKey) > -1) {
              newData = orderTime?.map((item) => (item.key === rowKey ? _.omit(d, 'index') : { ...item }));
            } else {
              const newTimeSlot = { ..._.omit(d, 'index'), key: getMaxKey(orderTime) + 1 };
              const overlappingSlot = orderTime.find((item) => (
                // Check for overlapping time slots
                (startTime >= new Date(`1970-01-01 ${item.startTime}`) && startTime < new Date(`1970-01-01 ${item.endTime}`))
                || (endTime > new Date(`1970-01-01 ${item.startTime}`) && endTime <= new Date(`1970-01-01 ${item.endTime}`))
              ));

              if (overlappingSlot) {
                message.warning('时间段重复');
                return;
              }

              const duplicateSlot = orderTime.find((item) => (
                item.startTime === newTimeSlot.startTime && item.endTime === newTimeSlot.endTime
              ));

              if (duplicateSlot) {
                message.warning('时间段重复');
                return;
              }

              newData = [...orderTime, newTimeSlot];
            }
            onSaveHandler(newData);
          },
          onDelete: async (key) => {
            onDeleteHandler(key as number);
          },
        }}
      />
      <Row gutter={20} className={style.buttons}>
        <Col span={12}>
          <Button
            icon={<RedoOutlined />}
            style={{ width: '100%' }}
            type="primary"
            disabled={!isWorkDay(currentDay.key)}
            onClick={allWorkDaySyncHandler}
          >
            全工作日同步
          </Button>
        </Col>
        <Col span={12}>
          <Button
            icon={<ChromeOutlined />}
            style={{ width: '100%' }}
            type="primary"
            danger
            onClick={allWeekSyncHandler}
          >
            全周同步
          </Button>
        </Col>
      </Row>
    </Drawer>
  );
};

export default OrderTime;
