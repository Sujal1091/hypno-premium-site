    import { useState } from "react";
    import seminar1 from "../assets/seminar.jpeg";
    import seminar2 from "../assets/seminarwithmic.jpeg";
    import workshop1 from "../assets/certificate2.jpeg";
    import workshop2 from "../assets/certificate1.jpeg";
    import workshop3 from "../assets/certificate3.jpeg";
    import workshop4 from "../assets/certificate4.jpeg";
    import workshop5 from "../assets/certificate5.jpeg";
    import workshop6 from "../assets/certificate6.jpeg";
    import workshop7 from "../assets/certificate7.jpeg";
    import workshop8 from "../assets/certificate8.jpeg";
    import card from "../assets/visiting card.jpeg";
    import book from "../assets/book.jpeg";
    import poster from "../assets/seminar poster.jpeg";
    import logo from "../assets/Logo.jpeg";
    import ScrollReveal from "../components/ScrollReveal";

    const MediaGallery = () => {
        const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        seminar1,
        seminar2,
        workshop1,
        workshop2,
        workshop3,
        workshop4,
        workshop5,
        workshop6,
        workshop7,
        workshop8,
        card,
        book,
        poster,
        logo
    ];

    return (
        <ScrollReveal>
        <section className="py-28 px-6 bg-black min-h-screen">
        <div className="max-w-7xl mx-auto">

            <h1 className="text-4xl md:text-5xl text-center mb-16 font-light">
            Media Gallery
            </h1>

            
            {/* IMAGE GRID */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {images.map((img, index) => (
                <div
                key={index}
                onClick={() => setSelectedImage(img)}
                className="cursor-pointer overflow-hidden rounded-2xl border border-white/10 
                hover:border-[#c6a86b] transition duration-500"
                >
                <img
                    src={img}
                    alt="Gallery"
                    className="w-full h-80 object-cover 
                    transition duration-700 hover:scale-110"
                />
                </div>
            ))}
            </div>
        </div>

        {/* MODAL */}
        {selectedImage && (
            <div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-6"
            onClick={() => setSelectedImage(null)}
            >
            <div className="relative max-w-5xl w-full">
                
                {/* CLOSE BUTTON */}
                <button
                className="absolute -top-12 right-0 text-white text-3xl"
                onClick={() => setSelectedImage(null)}
                >
                ✕
                </button>

                <img
                src={selectedImage}
                alt="Full View"
                className="w-full max-h-[85vh] object-contain rounded-xl"
                />
            </div>
            </div>
        )}
        </section>
        </ScrollReveal>
    );
    };

    export default MediaGallery;