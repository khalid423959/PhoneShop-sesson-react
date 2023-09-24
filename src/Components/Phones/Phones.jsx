import PhoneCart from "./PhoneCart";


const Phones = ({ phones }) => {
    console.log(phones)
    return (
        <div>
            <h1 className="text-2xl text-center py-10">All Categories Phones</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5 gap-10 max-w-[1300px] m-auto">
                {
                    phones?.map(phone => <PhoneCart key={phone.id} phone={phone}></PhoneCart>)
                }
            </div>
        </div>
    );
};

export default Phones;