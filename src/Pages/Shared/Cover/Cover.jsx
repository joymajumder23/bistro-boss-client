import { Parallax } from 'react-parallax';

const Cover = ({ img, title, details }) => {
    return (
            <Parallax
                blur={{ min: -50, max: 50 }}
                bgImage={img}
                bgImageAlt=""
                strength={-200}
            >
                <div className="hero min-h-screen h-[700px]">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                            <p className="mb-5">{details}</p>
                        </div>
                    </div>
                </div>
            </Parallax>
    );
};

export default Cover;