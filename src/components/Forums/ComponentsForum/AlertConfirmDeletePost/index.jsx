import { Button, notification, Space } from 'antd';
import IconButtonDelete from '../IconButtonDelete';
import {DeleteFilled} from '@ant-design/icons';
import DeleteIcon from '@mui/icons-material/Delete';

const close = () => {
  console.log(
    'Notification was closed. Either the close button was clicked or duration time elapsed.',
  );
};

function AlertConfirmDeletePost(){
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    const key = `open${Date.now()}`;
    const btn = (
      <Space>
        <Button type="primary" style={{backgroundColor: '#FF7F50'}} size="small" onClick={() => alert('oke delete')}>
          Xóa
        </Button>
        <Button type="primary" size="small" onClick={() => api.destroy(key)} style={{backgroundColor: "green"}}>
          Hủy bỏ
        </Button>
      </Space>
    );
    api.open({
      message: 'Bạn có xác nhận xóa bài viết này không?',
      btn,
      key,
      onClose: close,
      placement: 'top',
    });
  };
  return (
    <>
      {contextHolder}
      <IconButtonDelete icon={<DeleteIcon fontSize='small' style={{color: '#FF7F50'}}/>} text="Xóa" onClick={openNotification}/>
    </>
  );
};
export default AlertConfirmDeletePost;