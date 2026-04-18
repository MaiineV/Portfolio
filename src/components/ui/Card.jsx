import classes from './Card.module.scss';

export default function Card({ as = 'article', children, className = '', ...rest }) {
  const Tag = as;
  return (
    <Tag className={`${classes.card} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
