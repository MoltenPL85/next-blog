import ReactDOM from 'react-dom';
import { Status } from '../../components/contact/contact-form';
import classes from './notification.module.css';

export interface NotificationProps {
  title: string;
  message: string;
  status: Status;
}

const Notification = ({ title, message, status }: NotificationProps) => {
  let statusClasses = '';

  if (status === 'success') {
    statusClasses = classes.success;
  }

  if (status === 'error') {
    statusClasses = classes.error;
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;

  if (typeof window === 'object') {
    return ReactDOM.createPortal(
      <div className={cssClasses}>
        <h2>{title}</h2>
        <p>{message}</p>
      </div>,
      document.getElementById('notifications')
    );
  }

  return <div />;
};

export default Notification;
