import styles from './contentItem.module.scss'
import classNames from 'classnames/bind';
const cx = classNames.bind(styles)

function ContentItem({data}) {
    return ( 
        <div className={cx('item')}>
            <h3 className={cx('title')}>{data.title}</h3>
            <span className={cx('content')}>
                <img className={cx('logo')} src={data.logo} alt=""></img>
                <p className={cx('content-p')}>{data.content}</p>
            </span>
            <p className={cx('footer')}>{data.footer}</p>
        </div>
     );
}
export default ContentItem;