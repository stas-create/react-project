import css from './Genre.module.css'
const Genre = ({genre}) => {

    const {name} = genre;

    return (
        <div className={css.Badge}>
            {name}
        </div>
    );
};

export {Genre};