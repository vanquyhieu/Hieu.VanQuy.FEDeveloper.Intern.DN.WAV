import styles from './contentItem.module.scss'
import classNames from 'classnames/bind';
import Items from './Items';

const cx = classNames.bind(styles)

const CONTENT_ITEMS = [
    {
      title:'Lorem ipsum dolor sit amet',
      logo: require('../../asset/logo1.png'),
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ',
      footer: 'ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.',
    },
    {
      title:'Lorem ipsum dolor sit amet',
      logo: require('../../asset/logo2.png'),
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ',
      footer: 'ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.',
    },
    {
      title:'Lorem ipsum dolor sit amet',
      logo: require('../../asset/logo3.png'),
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ',
      footer: 'ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.',
    },    
    
  ]

function Content() {
    return (
      <div  className={cx('wrapper')}>
        <Items items={CONTENT_ITEMS}></Items>
      </div>
      );
    }

export default Content;