const SectionHeading = ({ mainText, highlightedText }) => {
    return (
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
            {mainText}{' '}
            <span className='underline underline-offset-4 decoration-1 under font-light'>
                {highlightedText}
            </span>
        </h1>
    );
};

export default SectionHeading;