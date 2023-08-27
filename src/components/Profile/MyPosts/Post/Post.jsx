import s from './Post.module.css';

function Post(props) {
    return (
            <div className={s.item}>
              <img src='https://sun6-20.userapi.com/s/v1/ig2/QMbUxDekZdcFqMtVg66ieGV15hgouRDJ9GGYfr-h2myeHUEdRl7tmQMZ6MJpMfOpeBVPuNCWsNlCaIPCfx4w7rOX.jpg?size=2400x2400&quality=95&crop=0,0,2400,2400&ava=1'/>
              {props.message}
              <div>
                <span>like</span>
              </div>
              
            </div>
    );
  }

export default Post