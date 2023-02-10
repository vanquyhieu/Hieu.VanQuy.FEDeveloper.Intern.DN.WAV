import classNames from "classnames/bind";
import styles from "./Siderbar.module.scss"

const cx = classNames.bind(styles)

function Button({
    children,
    className,
    target = false,
    active = false,
    inactive= false,
}) 

{
    const classes = cx('siderbarItem', {
        [className]: className,
        target,
        active,
        inactive
    })
    return (
        <>
            <span className={classes}>
               <span className={cx('text')}>{children}</span>
            </span>
        </>
     );
}

export default Button;