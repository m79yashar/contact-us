import logo from './Logo.png';
import phone from './phon.jpg';
const HomePage = () => {
    return ( 
        <div className="container">
            <div className="header">
                <img src={logo}/>
            </div>
            <div className="bod">
                <div className="bod-right">
                    <div className="text">
                        <h1>تماس با نیکارو</h1>
                        <p>درصورت نیاز به راهنمایی ومشاوره رایگان می توانید با شماره زیر تماس بگیرید و یا فرم درخواست راهنمایی را پر کنید تا همکاران ما با شما تماس بگیرند</p>
                        <form>
                            <select name="mozo" id="select">
                                <option value="">طرح سوال</option>
                                <option value="">انتقاد</option>
                                <option value="">پیشنهاد</option>
                            </select>
                            <label htmlFor="name">  :موضوع </label>
                            <br />
                            <input type="text" placeholder="" id='name' required/>
                            <label htmlFor="name">  :نام و نام خانوادگی </label>
                            <br />
                            <input type="number" placeholder="09152354191" id='phone' required/>
                            <label htmlFor="phone">  :شماره تماس</label>
                            <br />
                            <input type="text" placeholder="" id='title' required/>
                            <label htmlFor="title">  :عنوان درخواست</label>
                            <br />
                            <textarea name="requeste" id="requeste"></textarea>
                            <label htmlFor="requeste">  :شرح درخواست</label>
                            <br />
                            <button>ثبت</button>
                        </form>
                        
                    </div>
                    <div className="number">
                        <b><p>شماره تماس و پشتیبانی</p></b>
                        <b><p>051-910-90-439</p></b>
                    </div>
                </div>
                <div className="bod-left">
                    <img src={phone} alt="" />
                </div>
            </div>
        </div>
     );
}
 
export default HomePage;