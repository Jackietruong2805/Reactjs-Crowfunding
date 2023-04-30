import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import {withErrorBoundary} from "react-error-boundary";
import ErrorComponent from '../components/common/ErrorComponent';

const LayoutAuthentication = (props) => {
    const {children, heading = ''} = props;
    return (
        <div className='relative w-full min-h-screen p-10 bg-lite dark:bg-darkbg isolate'>
            <img src='/Ellipse.png' alt='bg' className='absolute bottom-0 left-0 right-0 hidden pointer-events-none lg:block -z-10'/>
            <Link to='/' className='inline-block mb-5 lg:mb-16'>
                <img src='/logo.png' alt='crowfunding-app'/>
            </Link>
            <div className='mx-auto px-5 py-8 lg:px-16 lg:py-12 max-w-[556px] bg-white dark:bg-darkSecondary rounded-xl'>
                <h1 className='mb-1 text-lg font-semibold text-center dark:text-white text-text1 lg:text-xl lg:mb-3'>{heading}</h1>
                    {children}
            </div>
        </div>
    );
};

LayoutAuthentication.propTypes = {
    heading: PropTypes.string,
    children: PropTypes.node
}

export default withErrorBoundary(LayoutAuthentication,{
    FallbackComponent: ErrorComponent
});