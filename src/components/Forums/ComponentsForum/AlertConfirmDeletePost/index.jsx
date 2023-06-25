import { Button, message, notification, Space} from 'antd';
import IconButtonDelete from '../IconButtonDelete';
import DeleteIcon from '@mui/icons-material/Delete';
import { deletePostByUser } from '../../../../API';
import { useDispatch, useSelector } from 'react-redux';

const close = () => {
  message.warning("Don't delete any post!")
};

function AlertConfirmDeletePost(props){
  
  const {post} = props;
  const user = useSelector((state) => state.auth.login?.currentUser);
  const dispatch = useDispatch();
  
  const [api, contextHolder] = notification.useNotification();
  
  const handleDeletePost = () => {
    deletePostByUser(user?.accessToken, dispatch, post?.id);
    alertNotification(`Delete '${post.title}' successfully!`, "topLeft")
  }
  
  const openNotification = () => {
    const key = `open${Date.now()}`;
    const btn = (
      <Space>
        <Button 
            type="primary" 
            style={{backgroundColor: '#FF7F50'}} 
            size="small" 
            onClick={handleDeletePost}
        >
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

  const alertNotification = (text ,placement) => {
    api.info({
      message: `${text}`,
      placement,
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