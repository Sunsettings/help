import { PageContainer } from '@ant-design/pro-components';
import { Card, Pagination, Space } from 'antd';
import { IStudent } from '@/utils/types';
import { useStudents } from '@/services/students';
import style from './index.module.less';

/**
* 学员管理
*/
const Student = () => {
  const {
    loading, data, page, refetch,
  } = useStudents();

  const onPageChangeHandler = (pageNum:number, pageSize:number) => {
    refetch({
      page: {
        pageNum,
        pageSize,
      },
    });
  };
  return (
    <div className={style.container}>
      <PageContainer
        loading={loading}
        header={{
          title: '学员管理',
        }}
      >
        <Card>
          {data?.map((item:IStudent) => (
            <Card
              key={item.id}
              hoverable
              className={style.card}
              cover={(
                <div
                  className={style.avatar}
                  style={{ backgroundImage: `url(${item.avatar || 'http://homework-drop-assets.oss-cn-beijing.aliyuncs.com/images/1675623073445.jpg'} )` }}
                />
                )}
            >
              <Card.Meta
                title={item.name || 'NoName'}
                description={(
                  <Space>
                    {[item.account || 'NoAccount', item.tel || 'NoPhoneNumber']}
                  </Space>
                )}
              />
            </Card>
          ))}
          <div className={style.page}>
            <Pagination
              pageSize={page?.pageSize}
              current={page?.pageNum}
              total={page?.total}
              onChange={onPageChangeHandler}
            />
          </div>
        </Card>
      </PageContainer>
    </div>
  );
};

export default Student;
