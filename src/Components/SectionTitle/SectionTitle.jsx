const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center md:w-3/12 mx-auto">
            <p className="text-xl text-yellow-500 border-b-4 p-4">---{subHeading}---</p>
            <h1 className="text-4xl font-bold uppercase border-b-4 p-4">{heading}</h1>
        </div>
    );
};

export default SectionTitle;