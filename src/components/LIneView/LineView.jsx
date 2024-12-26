
const LineView = () => {
    const images = ['/disc.png','dvd.png'];

    // لتكرار الصور داخل الـ div حتى تملأ المساحة
    const repeatedImages = [];
    while (repeatedImages.length < 15) {  // عدد التكرار حسب الحاجة
        repeatedImages.push(...images);  // إضافة الصور إلى المصفوفة
    }

    return (
        <div className="LineView">
            <p className="mt-24">Trusted by 2 millions+ teams</p>
            <div className="images">
                {
                    repeatedImages.map((image, index) => (
                        <img key={index} src={image} alt="image" />
                    ))
                }
            </div>
        </div>
    );
}

export default LineView;

