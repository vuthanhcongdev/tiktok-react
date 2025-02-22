import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
    return (  
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/826c0b78cb508f892d0709bdfa250bc8~tplv-tiktokx-cropcenter:100:100.jpg?dr=14579&nonce=66834&refresh_token=4351cd6dd62f32972cc2ad3cf88b8fe7&x-expires=1740326400&x-signature=mFQaJG1LCz%2F7aPmetwbQbCfQlFQ%3D&idc=my&ps=13740610&shcp=ff37627b&shp=30310797&t=4d5b0474" alt="Hoa" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;