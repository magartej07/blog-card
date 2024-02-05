import PropType from 'prop-types'
import badgeStyle from './Badge.module.css'

const Badge = ({children}) => {
  return (
    <span className={badgeStyle.Badge}>{children}</span>
    // <span >{children}</span>
  );
};
Badge.PropType ={
    children:PropType.node.isRequired,
}
export default Badge;