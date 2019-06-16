import React from 'react';

const Location = () => {
    return (
        <div className='location_wrapper'>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9811.864334701293!2d20.43359795782616!3d52.06214121398646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471944c550a014b3%3A0x29b0e61e4de3d1f3!2sStara+Garbarnia!5e0!3m2!1spl!2spl!4v1560601418877!5m2!1spl!2spl"
                width="100%"
                height="500"
                frameBorder="0"
                allowFullScreen>
            </iframe>
            <div className='location_tag'>
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;