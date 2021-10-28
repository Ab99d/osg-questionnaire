import React from 'react'
import osgLogo from './assest/images/logo.png'
import heroAR from './assest/images/hero-ar.png'
import brandNameBg1 from './assest/images/brandname-bg-1-ar.png'
import brandNameBg2 from './assest/images/brandname-bg-2.png'
import brandNameBgDesignIcon from './assest/images/brandname-design-icon.png'
import fedexLogo from './assest/images/fedex-logo.png'
import pepsiLogo from './assest/images/pepsi-logo.png'
import burgerLogo from './assest/images/burger-king.jpg'

const BrandIdentityQuestionnaireAR = () => {
    return (
        <div className="main-parent-AR"> {/* this main div is holding the full site */}
            {/* hero section */}
            <div className="hero">
                <div className="container">
                    <div className="d-flex flex-column">
                        <a className="navbar-brand mt-3" href="../public/index.html"><img src={osgLogo} alt="" className="col-5 w-50 logo-top"/></a>
                        <img src={heroAR} alt="" className='mt-5 col-4 align-self-center'/>
                    </div>
                </div>
            </div>

            {/* form section */}
            <form className="form">
                <div className="container">
                    <div className="d-flex justify-content-between flip-img">
                        <div className="context-bg d-flex position-relative">
                            <img src={brandNameBg1} alt=""/>
                            <div className="brand-name-tagline position-absolute">
                                <label htmlFor="brandName">وصف الشركة/المنظمة <br /><span id='en-lang'>اسم الشركة :</span></label>
                                <input type="text" id="brandName" name="brandName" className="text-center w-100" required/>
                                <div className="tag-line">
                                    <label htmlFor="tagline">شعار <br /> <span>اذا كان يوجد :</span></label>
                                    <textarea className="w-100" name="tagline" id="tagline" cols="30" rows="3" required></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="position-relative design-icon-container d-flex justify-content-end col-md-5">
                            <img src={brandNameBgDesignIcon} alt="" className="design-icon position-absolute w-100"/>
                            <img src={brandNameBg2} alt="" className=""/>
                        </div>
                    </div>
                </div>
                <div className="questions">
                    <div className="container">
                        <div className="col-lg-10 mx-auto">
                            <label htmlFor="nameMeaning" className='text-right'>ما المعنى الذي يحتويه اسم العلامة التجارية؟</label>
                            <textarea className="text-right" name="nameMeaning" id="nameMeaning" cols="30" rows="2" required></textarea>
                        </div>

                        <div className="col-lg-10 mx-auto">
                            <label htmlFor="organizations-history">يرجى اعلامنا بتاريخ شركتك/هل هي شركة ناشئة؟</label>
                            <textarea className="text-right" name="organizations-history" id="organizations-history" cols="30" rows="2" required></textarea>
                        </div>

                        <div className="col-lg-10 mx-auto">
                            <label htmlFor="companyProduct/service">يرجى إخبارنا بالمنتج (المنتجات) / الخدمة (الخدمات) التي تقدمها</label>
                            <textarea className="text-right" name="companyProduct/service" id="companyProduct/service" cols="30" rows="2" required></textarea>
                        </div>

                        <div className="col-lg-10 mx-auto">
                            <label htmlFor="people-part-of-company">كم عدد الأشخاص الذين يمثلون جزءًا من شركتك / مؤسستك؟</label>
                            <textarea className="text-right" name="people-part-of-company" id="people-part-of-company" cols="30" rows="2" required></textarea>
                        </div>

                        <div className="col-lg-8 mx-auto">
                            <label htmlFor="Location">أين موقعك (الشركة/الخدمة)؟</label>
                            <textarea className="text-right w-100" type="text" id="Location" name="Location" required/>
                        </div>

                        <div className="col-lg-8 mx-auto">
                            <label htmlFor="Summary">الرؤية والرسالة. لخص كل واحد في كلمات قليلة أو عبارات قصيرة</label>
                            <textarea className="text-right w-100" type="text" id="Summary" name="Summary" required/>
                        </div>

                        <div className="col-lg-8 mx-auto">
                            <label htmlFor="previousLogotype">.هل لديك شعار / علامة تجارية سابقة؟ (أرفق صورة أو رابط)</label>
                            <textarea className="text-right w-100" type="text" id="previousLogotype" name="previousLogotype" required/>
                        </div>

                        <div className="col-lg-8 mx-auto">
                            <label htmlFor="purposeOfCompany">اختياري (ولكنه مفيد جدًا) بغض النظر عن المال والربح
                            ما هو الغرض من المنظمة / الشركة؟</label>
                            <textarea className="text-right w-100" type="text" id="purposeOfCompany" name="purposeOfCompany" required/>
                        </div>

                        <div className="col-lg-8 mx-auto">
                            <label htmlFor="competitors">المنافسين <br /> قائمة 3 منافسين أساسيين وروابط موقعهم الى الويب</label>
                            <ol className="w-100 col-12">
                                <li><input className="text-right" type="text" name='Competitors' required/></li>
                                <li><input className="text-right" type="text" name='Competitors'/></li>
                                <li><input className="text-right" type="text" name='Competitors'/></li>
                            </ol>
                        </div>

                        <div className="col-lg-8 mx-auto">
                            <label htmlFor="isYourProductDifferent">هل هناك شيء يجعل شركتك / منتجك / خدمتك مختلفة عنهم</label>
                            <textarea className="w-100 text-right" type="text" id="isYourProductDifferent" name="isYourProductDifferent" required/>
                        </div>

                        <div className="col-lg-8 mx-auto">
                            <label htmlFor="competitors-better">هل تشعر بأن هناك أي شيئ يجعل من منافسيك أفضل؟</label>
                            <textarea className="text-right w-100" type="text" id="competitors-better" name="competitors-better" required/>
                        </div>

                        <div className="col-lg-11 mx-auto checkboxes-container">
                            <label htmlFor="information-about-company">بناءً على المعلومات السابقة، اختر 4/5 سمات
                            تناسب شركتك</label>
                            <div className="container d-flex flex-row flex-wrap mt-5 checkboxes-container" required>
                                <div className="col-auto my-1">
                                    <div className="custom-control custom-checkbox mr-sm-2">
                                        <input type="checkbox" className="custom-control-input" id="Safe" name="Safe"/>
                                        <label className="custom-control-label text-primary" htmlFor="Safe">آمن</label>
                                    </div>
                                </div>
                                <div className="col-auto my-1">
                                    <div className="custom-control custom-checkbox mr-sm-2">
                                        <input type="checkbox" className="custom-control-input" id="Monochrome" name="Monochrome"/>
                                        <label className="custom-control-label text-primary" htmlFor="Monochrome">أحادي اللون</label>
                                    </div>
                                </div>
                                <div className="col-auto my-1">
                                    <div className="custom-control custom-checkbox mr-sm-2">
                                        <input type="checkbox" className="custom-control-input" id="Complex" name="Complex"/>
                                        <label className="custom-control-label text-primary" htmlFor="Complex">مركب</label>
                                    </div>
                                </div>
                                <div className="col-auto my-1">
                                    <div className="custom-control custom-checkbox mr-sm-2">
                                        <input type="checkbox" className="custom-control-input" id="Simple" name="Simple"/>
                                        <label className="custom-control-label text-primary" htmlFor="Simple">بسيط</label>
                                    </div>
                                </div>
                                <div className="col-auto my-1">
                                    <div className="custom-control custom-checkbox mr-sm-2">
                                        <input type="checkbox" className="custom-control-input" id="Feminine" name="Feminine"/>
                                        <label className="custom-control-label text-primary" htmlFor="Feminine">خدمة للنساء</label>
                                    </div>
                                </div>
                                <div className="col-auto my-1">
                                    <div className="custom-control custom-checkbox mr-sm-2">
                                        <input type="checkbox" className="custom-control-input" id="Masculine" name="Masculine"/>
                                        <label className="custom-control-label text-primary" htmlFor="Masculine">خدمة للرجال</label>
                                    </div>
                                </div>
                                <div className="col-auto my-1">
                                    <div className="custom-control custom-checkbox mr-sm-2">
                                        <input type="checkbox" className="custom-control-input" id="Professional" name="Professional"/>
                                        <label className="custom-control-label text-primary" htmlFor="Professional">احترافي</label>
                                    </div>
                                </div>
                                <div className="col-auto my-1">
                                    <div className="custom-control custom-checkbox mr-sm-2">
                                        <input type="checkbox" className="custom-control-input" id="Casual" name="Casual"/>
                                        <label className="custom-control-label text-primary" htmlFor="Casual">غير رسمي</label>
                                    </div>
                                </div>
                                <div className="col-auto my-1">
                                    <div className="custom-control custom-checkbox mr-sm-2">
                                        <input type="checkbox" className="custom-control-input" id="Classic" name="Classic"/>
                                        <label className="custom-control-label text-primary" htmlFor="Classic">كلاسيكي</label>
                                    </div>
                                </div>
                                <div className="col-auto my-1">
                                    <div className="custom-control custom-checkbox mr-sm-2">
                                        <input type="checkbox" className="custom-control-input" id="Modern" name="Modern"/>
                                        <label className="custom-control-label text-primary" htmlFor="Modern">عصري</label>
                                    </div>
                                </div>
                                <div className="col-auto my-1">
                                    <div className="custom-control custom-checkbox mr-sm-2">
                                        <input type="checkbox" className="custom-control-input" id="Colorful" name="Colorful"/>
                                        <label className="custom-control-label text-primary" htmlFor="Colorful">زاهى الألوان</label>
                                    </div>
                                </div>
                                <div className="col-auto my-1">
                                    <div className="custom-control custom-checkbox mr-sm-2">
                                        <input type="checkbox" className="custom-control-input" id="Extremely" name="Extremely"/>
                                        <label className="custom-control-label text-primary" htmlFor="Extremely">مبالغ فيه</label>
                                    </div>
                                </div>
                                <div className="col-auto my-1">
                                    <div className="custom-control custom-checkbox mr-sm-2">
                                        <input type="checkbox" className="custom-control-input" id="Elegant" name="Elegant"/>
                                        <label className="custom-control-label text-primary" htmlFor="Elegant">أنيق</label>
                                    </div>
                                </div>
                                <div className="col-auto my-1">
                                    <div className="custom-control custom-checkbox mr-sm-2">
                                        <input type="checkbox" className="custom-control-input" id="Sport" name="Sport"/>
                                        <label className="custom-control-label text-primary" htmlFor="Sport">رياضي</label>
                                    </div>
                                </div>
                                <div className="col-auto my-1">
                                    <div className="custom-control custom-checkbox mr-sm-2">
                                        <input type="checkbox" className="custom-control-input" id="Luxury" name="Luxury"/>
                                        <label className="custom-control-label text-primary" htmlFor="Luxury">رفاهية</label>
                                    </div>
                                </div>
                                <div className="col-auto my-1">
                                    <div className="custom-control custom-checkbox mr-sm-2">
                                        <input type="checkbox" className="custom-control-input" id="Necessary" name="Necessary"/>
                                        <label className="custom-control-label text-primary" htmlFor="Necessary">ضروري</label>
                                    </div>
                                </div>
                                <div className="col-auto my-1">
                                    <div className="custom-control custom-checkbox mr-sm-2">
                                        <input type="checkbox" className="custom-control-input" id="Serious" name="Serious"/>
                                        <label className="custom-control-label text-primary" htmlFor="Serious">جدّي</label>
                                    </div>
                                </div>
                                <div className="col-auto my-1">
                                    <div className="custom-control custom-checkbox mr-sm-2">
                                        <input type="checkbox" className="custom-control-input" id="Fun" name="Fun"/>
                                        <label className="custom-control-label text-primary" htmlFor="Fun">مرح</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8 mx-auto">
                            <label htmlFor="logotype-client-like">مراجع <br /> هل هناك أي شعار / علامة تجارية لها شعار مع
                            النمط / المظهر الذي يعجبك؟ (يرجى تضمين الروابط أو الصور))
                            </label>
                            <textarea className="text-right w-100" type="text" id="logotype-client-like" name="logotype-client-like" required/>
                            <div className="input-group mb-3 mt-2">
                                <div className="custom-file">
                                    <input type="file" className="custom-file-input" id="inputGroupFile01"/>
                                    <label className="custom-file-label " htmlFor="inputGroupFile01">رفع ملف</label>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8 mx-auto">
                            <label htmlFor="clientRequirements">المتطلبات: (إذا كان لديك أي منها. أشياء مثل
                            الألوان الإلزامية ، والألوان التي يجب تجنبها ، والمظهر / السمة المحددة ، باختصار 
                            "تريد" و "لا تريد") اشرح الاسباب ايضا</label>
                            <textarea className="text-right w-100" type="text" id="clientRequirements" name="clientRequirements" required/>
                        </div>
                    </div>
                </div>
                <div className="logo-type">
                    <div className="container">
                        <div className="col-12 mx-auto text-center mb-5">
                            <p className="h5 mt-5">التصميم (اختياري)</p>
                            <p>هل هناك أي شعار / علامة تجارية كبيرة أو معروفة
                            شعار مع النمط / المظهر الذي تفضله؟</p>
                        </div>
                        
                        <div className="row d-flex justify-content-center mx-auto col-12 align-items-center">
                            <div className="card-container mr-5 pr-lg-5">
                                <div className="col-sm">
                                    <div className="card border-none fedex border-0">                                    
                                        <br />
                                        <div>
                                            <img src={fedexLogo} alt="" className="fedexLogo"/>
                                        </div>
                                        <br />
                                        <div className="card-body text-center">
                                            <label htmlFor="text-logotype"></label>
                                            <input type="radio" name="logotype" id="text-logotype" required/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card-container mr-lg-5 mr-md-5 pr-lg-5">
                                <div className="col-sm">
                                    <div className="card border-0">
                                        <div>
                                            <img src={pepsiLogo} alt="" className="pepsiLogo"/>
                                        </div>
                                        <div className="card-body text-center">
                                            <label htmlFor="text-logotype"></label>
                                            <input type="radio" name="logotype" id="icon-logotype" required/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="">
                                <div className="col-sm">
                                    <div className="card border-0">
                                        <div>
                                            <img src={burgerLogo} alt="" className="burgerLogo"/>
                                        </div>
                                        <div className="card-body text-center">
                                            <label htmlFor="text-logotype"></label>
                                            <input type="radio" name="logotype" id="text+icon-logotype" required/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 mx-auto text-center mb-5 mt-3">
                            <h5 className="font-weight-bold">شكرا لملء هذا الاستبيان. سوف نقوم ببناء
                            أفضل هوية للعلامة التجارية التي تهدف إليها</h5>
                        </div>
                        
                        <div className='sub-btn mb-5'>
                            <input className="btn btn-primary" type="submit" value="إرسال"></input>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default BrandIdentityQuestionnaireAR
