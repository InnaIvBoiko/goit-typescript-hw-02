import css from './Loader.module.css';
import { Style, ThreeDots } from 'react-loader-spinner';

type LoaderProps = {
    height?: string;
    width?: string;
    color?: string;
    radius?: string;
    ariaLabel?: string;
    wrapperClass?: string;
};

export default function Loader({
    height = '80',
    width = '80',
    color = '#6495ed',
    radius = '9',
    ariaLabel = 'three-dots-loading',
    wrapperClass = '',
}: LoaderProps) {
    return (
        <div className={css.loader}>
            <ThreeDots
                height={height}
                width={width}
                color={color}
                radius={radius}
                ariaLabel={ariaLabel}
                wrapperClass={wrapperClass}
            />
        </div>
    );
};