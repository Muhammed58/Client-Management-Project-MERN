import React from "react";
import { useForm } from "react-hook-form";


export const ClientForm = ({client, onSubmit}) => {
  
    const { register, handleSubmit } = useForm({
        defaultValues:{ 
            fName: client?.fName,
            lName: client?.lName,
            email: client?.email,
            tel: client?.tel,
            gender: client?.gender,
            pregnancy: client?.pregnancy,
            date: client?.date,
            weight: client?.weight,
            height: client?.height,
            job: client?.job,
            city: client?.city,
            sporDuringDiet: client?.sporDuringDiet,
            chronicIllness: client?.chronicIllness,
            usingMedicine: client?.usingMedicine,
            menopause: client?.menopause,
            allergy: client?.allergy,
            alcohol: client?.alcohol,
            cigarette: client?.cigarette,
            frequencySport:client?.frequencySport,
            glassWater: client?.glassWater,
            useSugar: client?.useSugar,
            snackBrkfstToNoonTime:client?.snackBrkfstToNoonTime,
            snackBrkfstToNoonFood:client?.snackBrkfstToNoonFood,
            snackNoonToNightTime: client?.snackNoonToNightTime,
            snackNoonToNightFood: client?.snackNoonToNightFood,
            snackNightToSleepTime:client?.snackNightToSleepTime,
            snackNightToSleepFood:client?.snackNightToSleepFood,
            wakeupTime:client?.wakeupTime,
            firstSnackTime: client?.firstSnackTime,
            breakfastTime:client?.breakfastTime,
            rushHour:client?.rushHour,
            workStartTime: client?.workStartTime,
            dinnerTime:client?.dinnerTime,
            breakTime:client?.breakTime,
            secondSnackTime:client?.secondSnackTime,
            lunchTime:client?.lunchTime,
            sleepTime:client?.sleepTime,
            offDaywakeupTime:client?.offDaywakeupTime,
            offDayfirstSnackTime: client?.offDayfirstSnackTime,
            offDaybreakfastTime:client?.offDaybreakfastTime,
            offDayrushHour:client?.offDayrushHour,
            offDayworkStartTime: client?.offDayworkStartTime,
            offDaydinnerTime:client?.offDaydinnerTime,
            offDaybreakTime:client?.offDaybreakTime,
            offDaysecondSnackTime:client?.offDaysecondSnackTime,
            offDaylunchTime:client?.offDaylunchTime,
            offDaysleepTime:client?.offDaysleepTime,
            wakeUpFood:client?.wakeUpFood,
            breakfastFood:client?.breakfastFood,
            firstSnackFood:client?.firstSnackFood,
            lunchFood:client?.lunchFood,
            secondSnackFood:client?.secondSnackFood,
            dinnerFood:client?.dinnerFood,
            nightTimeFood:client?.nightTimeFood,
            offDaywakeUpFood:client?.offDaywakeUpFood,
            offDaybreakfastFood:client?.offDaybreakfastFood,
            offDayfirstSnackFood:client?.offDayfirstSnackFood,
            offDaylunchFood:client?.offDaylunchFood,
            offDaysecondSnackFood:client?.offDaysecondSnackFood,
            offDaydinnerFood:client?.offDaydinnerFood,
            offDaynightTimeFood:client?.offDaynightTimeFood,
             },
        }); 

    const submitHandler = handleSubmit((data) => { 
        onSubmit(data)
    });
    
    return(
            <form className="myForm" onSubmit={submitHandler}>
            <button type="submit" className="btn btn-primary submit-btn">Submit</button>
                <div className="sideBySideForm">
                  <div className="form-group">
                    <label>Adı</label>
                    <input {...register("fName")} type="text"  className="form-control" name="fName"  placeholder="Adınız"/>
                  </div>
                  <div className="form-group">
                    <label>Soyadı</label>
                    <input {...register("lName")} type="text" className="form-control" name="lName" placeholder="Soyadınız "/>
                  </div>
                  <div className="form-group"> 
                    <label htmlFor="example-date-input ">Doğum Tarihi</label>
                    <input {...register("date")} className="form-control" type="date" name="date" id="example-date-input"/>
                  </div>
                </div>  
                <div className="form-group">
                  <label>Kilo</label>
                  <input {...register("weight")} type="number" className="form-control" min="40" name="weight" placeholder="Örneğin 65"/>
                </div>
                <div className="form-group">
                  <label>Boy</label>
                  <input {...register("height")} type="number" className="form-control" min="130" name="height" placeholder="Örn. 175"/>
                </div>
                <div className="form-group">
                  <label>Cinsiyet</label>
                  <select {...register("gender")} className="form-select" aria-label="Default select example" name="gender" required>
                    <option hidden>Cinsiyet seçin</option>
                    <option>Kadın</option>
                    <option>Erkek</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input {...register("email")} type="email" className="form-control" name="email" placeholder="Email adresinizi girin"/>
                </div>
                <div className="form-group">
                  <label>Mesleğiniz</label>
                  <input {...register("job")} type="text" className="form-control" name="job" placeholder="Mesleğinizi Girin!"/>
                </div>
                <div className="form-group">
                  <label>Adres</label>
                  <input {...register("city")} type="text" className="form-control" name="city" placeholder="Adresinizi Girin!"/>
                </div>
                <div className="form-group">
                  <label>Telefon Numaranız</label>
                  <input {...register("telNumber")} type="number" className="form-control" name="telNumber" placeholder="Telefon Numaranız"/>
                </div>
                <div className="form-group">
                  <label>Kronik hastalık var mı? Varsa hangi kronik hastalık?</label>
                  <input {...register("chronicIllness")} type="text" className="form-control" name="chronicIllness" placeholder="Kronik Hastalık"/>
                </div>
                <div className="form-group">
                  <label>Hamile yada emzirme döneminde misiniz?</label>
                  <input {...register("pregnancy")} type="text" className="form-control" name="pregnancy" placeholder="Hamile yada emzirme"/>
                </div>
                <div className="form-group">
                  <label>Menopoz musunuz?</label>
                  <input {...register("menopause")} type="text" className="form-control" name="menopause"  placeholder="Menopoz "/>
                </div>
                <div className="form-group">
                  <label>Sürekli kullandığınız bir ilaç var mı? Varsa hangi ilaç?</label>
                  <input {...register("usingMedicine")} type="text" className="form-control" name="usingMedicine" placeholder="Kullanılan İlaçlar"/>
                </div>
                <div className="form-group">
                  <label>Günlük kaç litre yada kaç bardak su tüketiyorsunuz?</label>
                  <input {...register("glassWater")} type="text" className="form-control" name="glassWater" placeholder="İçilen Su Miktarı"/>
                </div>
                <div className="form-group">
                  <label>İçeceklerinizde şeker kullanıyor musunuz?</label>
                  <input {...register("useSugar")} type="text" className="form-control" name="useSugar" placeholder="Şeker Kullanımı"/>
                </div>
                <p className="spaceHeaders">---------------</p>
                <div className="form-group">
                  <label className="form-headers">Ara öğün yapıyor musunuz, yapıyorsanız hangi ara öğün hangi saate denk geliyor (ev,
                        iş, dışarısı), neler tüketiyorsunuz?</label>
                  <label>Kahvaltı-Öğle Arası</label>
                  <input {...register("snackBrkfstToNoonTime")} type="text" className="form-control" name="snackBrkfstToNoonTime" placeholder="Saatler"/>
                  <input {...register("snackBrkfstToNoonFood")} type="text" className="form-control" name="snackBrkfstToNoonFood" placeholder="Yedikleriniz"/>
                  <label>Öğle-Akşam Arası</label>
                  <input {...register("snackNoonToNightTime")} type="text" className="form-control" name="snackNoonToNightTime" placeholder="Saatler"/>
                  <input {...register("snackNoonToNightFood")} type="text" className="form-control" name="snackNoonToNightFood" placeholder="Yedikleriniz"/>
                  <label>Akşam Yemekten Sonra</label>
                  <input {...register("snackNightToSleepTime")} type="text" className="form-control" name="snackNightToSleepTime" placeholder="Saatler"/>
                  <input {...register("snackNightToSleepFood")} type="text" className="form-control" name="snackNightToSleepFood" placeholder="Yedikleriniz"/>
                </div>
                <div className="form-group">
                  <label>Alkol kullanma alışkanlığı var mı? Sıklığı nedir?</label>
                  <input {...register("alcohol")} type="text" className="form-control" name="alcohol" placeholder="Alkol Kullanım/Sıklığı"/>
                </div>
                <div className="form-group">
                  <label>Sigara kullanma alışkanlığı var mı sıklığı nedir?</label>
                  <input {...register("cigarette")} type="text" className="form-control" name="cigarette" placeholder="Sigara Kullanım/Sıklığı"/>
                </div>
                <div className="form-group">
                  <label>Bu program boyunca egzersiz yapacağınız tahmini saat aralığınız nedir?</label>
                  <input {...register("sporDuringDiet")} type="text" className="form-control" name="sporDuringDiet" placeholder="Spor Yapacağınız Saatler"/>
                </div>
                <div className="form-group">
                  <label>Alerjiniz olan veya asla tüketmeyeceğiniz besinler nelerdir?</label>
                  <input {...register("allergy")} type="text" className="form-control" name="allergy" placeholder="Alerjik Besinler"/>
                </div>

                <p className="spaceHeaders">---------------</p>

                <div className="form-group">
                    <label className="form-headers"><h5><b> 1 GÜN BOYUNCA ÖNEMLİ SAATLERİNİZİ YAZAR MISINIZ?</b></h5><br/>  </label>
                    <label className="form-headers"><h6><b> ÇALIŞMA/OKUL GÜNLERİ PLANI </b></h6><br/>  </label>
                    <div className="sideBySideForm">
                        <div>
                            <label>Uyanma Saati </label>
                            <input {...register("wakeupTime")} type="text" id="flexInputBox" className="form-control" name="wakeupTime"/>
                        </div>
                        <div>
                            <label>1.Ara Öğün Saati (Yapıyorsanız):  </label>
                            <input {...register("firstSnackTime")} type="text" id="flexInputBox" className="form-control" name="firstSnackTime"/>
                        </div>
                    </div>
                    <div className="sideBySideForm"> 
                        <div>
                            <label>Kahvaltı Saati </label>
                            <input {...register("breakfastTime")} type="text" id="flexInputBox" className="form-control" name="breakfastTime"/>
                        </div>
                        <div>
                            <label>İş Çıkış Saati </label>
                            <input {...register("rushHour")} type="text" id="flexInputBox" className="form-control" name="rushHour"/>
                        </div>
                    </div>
                    <div className="sideBySideForm">    
                        <div>
                            <label>İşe Başlangıç Saati </label>
                            <input {...register("workStartTime")} type="text" id="flexInputBox" className="form-control" name="workStartTime"/>
                        </div>
                        <div>
                            <label>Akşam Yemeği Saati </label>
                            <input {...register("dinnerTime")} type="text" id="flexInputBox" className="form-control" name="dinnerTime"/>
                        </div>
                    </div>
                    <div className="sideBySideForm">
                        <div>
                            <label>Ara Saati (Yapıyorsanız) </label>
                            <input {...register("breakTime")} type="text" id="flexInputBox" className="form-control" name="breakTime"/>
                        </div>
                        <div>
                            <label>2.Ara Öğün Saati (Yapıyorsanız) </label>
                            <input {...register("secondSnackTime")} type="text" id="flexInputBox" className="form-control" name="secondSnackTime"/>
                        </div>
                    </div>
                    <div className="sideBySideForm">
                        <div>
                            <label>Öğle Yemeği Saati</label>
                            <input {...register("lunchTime")} type="text" id="flexInputBox" className="form-control" name="lunchTime"/>
                        </div>
                        <div>
                            <label>Yatış Saati </label>
                            <input {...register("sleepTime")} type="text" id="flexInputBox" className="form-control" name="sleepTime"/>
                        </div>
                    </div>
                    <p className="spaceHeaders">---------------</p>

                    <label className="form-headers"><h6><b> İZİNLİ GÜNLER PLANI </b></h6><br/>  </label>
                    <div className="sideBySideForm">
                        <div>
                            <label>Uyanma Saati </label>
                            <input {...register("offDaywakeupTime")} type="text" id="flexInputBox" className="form-control" name="offDaywakeupTime"/>
                        </div>
                        <div>
                            <label>1.Ara Öğün Saati (Yapıyorsanız):  </label>
                            <input {...register("offDayfirstSnackTime")} type="text" id="flexInputBox" className="form-control" name="offDayfirstSnackTime"/>
                        </div>
                    </div>
                    <div className="sideBySideForm"> 
                        <div>
                            <label>Kahvaltı Saati </label>
                            <input {...register("offDaybreakfastTime")} type="text" id="flexInputBox" className="form-control" name="offDaybreakfastTime"/>
                        </div>
                        <div>
                            <label>İş Çıkış Saati </label>
                            <input {...register("offDayrushHour")} type="text" id="flexInputBox" className="form-control" name="offDayrushHour"/>
                        </div>
                    </div>
                    <div className="sideBySideForm">    
                        <div>
                            <label>İşe Başlangıç Saati </label>
                            <input {...register("offDayworkStartTime")} type="text" id="flexInputBox" className="form-control" name="offDayworkStartTime"/>
                        </div>
                        <div>
                            <label>Akşam Yemeği Saati </label>
                            <input {...register("offDaydinnerTime")} type="text" id="flexInputBox" className="form-control" name="offDaydinnerTime"/>
                        </div>
                    </div>
                    <div className="sideBySideForm">
                        <div>
                            <label>Ara Saati (Yapıyorsanız) </label>
                            <input {...register("offDaybreakTime")} type="text" id="flexInputBox" className="form-control" name="offDaybreakTime"/>
                        </div>
                        <div>
                            <label>2.Ara Öğün Saati (Yapıyorsanız) </label>
                            <input {...register("offDaysecondSnackTime")} type="text" id="flexInputBox" className="form-control" name="offDaysecondSnackTime"/>
                        </div>
                    </div>
                    <div className="sideBySideForm">
                        <div>
                            <label>Öğle Yemeği Saati</label>
                            <input {...register("offDaylunchTime")} type="text" id="flexInputBox" className="form-control" name="offDaylunchTime"/>
                        </div>
                        <div>
                            <label>Yatış Saati </label>
                            <input {...register("offDaysleepTime")} type="text" id="flexInputBox" className="form-control" name="offDaysleepTime"/>
                        </div>
                    </div>
                    <p className="spaceHeaders">---------------</p>

                    
                    <label className="form-headers"><h6><b> ÇALIŞMA/OKUL GÜNLERİ 1 GÜN BOYUNCA GENELLİKLE NELER YEDİKLERİNİZİ YAZAR MISINIZ?  </b></h6><br/>  </label>
                    
                        <div>
                            <label>UYANINCA</label>
                            <input {...register("wakeUpFood")} type="text" className="form-control" name="wakeUpFood" placeholder="Uyanınca tükettiğiniz besinler?"/>
                        </div>
                        <div>
                            <label>KAHVALTI </label>
                            <input {...register("breakfastFood")} type="text" className="form-control" name="breakfastFood" placeholder="Kahvaltıda tükettiğiniz besinler nelerdir?"/>
                        </div>
                        <div>
                            <label>ARA</label>
                            <input {...register("firstSnackFood")} type="text" className="form-control" name="firstSnackFood" placeholder="Günün ilk araöğününde tükettiğiniz besinler nelerdir?"/>
                        </div>
                        <div>
                            <label>ÖĞLE</label>
                            <input {...register("lunchFood")} type="text" className="form-control" name="lunchFood" placeholder="Öğle yemeğinde tükettiğiniz besinler nelerdir?"/>
                        </div>
                        <div>
                            <label>2.ARA</label>
                            <input {...register("secondSnackFood")} type="text" className="form-control" name="secondSnackFood" placeholder="İkinci araöğünde tükettiğiniz besinler nelerdir?"/>
                        </div>
                        <div>
                            <label>AKŞAM</label>
                            <input {...register("dinnerFood")} type="text" className="form-control" name="dinnerFood" placeholder="Akşam yemeğinde tükettiğiniz besinler nelerdir?"/>
                        </div>
                        <div>
                            <label>GECE</label>
                            <input {...register("nightTimeFood")} type="text" className="form-control" name="nightTimeFood" placeholder="Gece yatmadan tükettiğiniz besinler nelerdir?"/>
                        </div>
                        
                    <p className="spaceHeaders">---------------</p>

                    
                    <label className="form-headers"><h6><b> İZİNLİ GÜNLERDE 1 GÜN BOYUNCA GENELLİKLE NELER YEDİKLERİNİZİ YAZAR MISINIZ?  </b></h6><br/>  </label>
                    
                    <div>
                            <label>UYANINCA</label>
                            <input {...register("offDaywakeUpFood")} type="text" className="form-control" name="offDaywakeUpFood" placeholder="Uyanınca tükettiğiniz besinler?"/>
                        </div>
                        <div>
                            <label>KAHVALTI </label>
                            <input {...register("offDaybreakfastFood")} type="text" className="form-control" name="offDaybreakfastFood" placeholder="Kahvaltıda tükettiğiniz besinler nelerdir?"/>
                        </div>
                        <div>
                            <label>ARA</label>
                            <input {...register("offDayfirstSnackFood")} type="text" className="form-control" name="offDayfirstSnackFood" placeholder="Günün ilk araöğününde tükettiğiniz besinler nelerdir?"/>
                        </div>
                        <div>
                            <label>ÖĞLE</label>
                            <input {...register("offDaylunchFood")} type="text" className="form-control" name="offDaylunchFood" placeholder="Öğle yemeğinde tükettiğiniz besinler nelerdir?"/>
                        </div>
                        <div>
                            <label>2.ARA</label>
                            <input {...register("offDaysecondSnackFood")} type="text" className="form-control" name="offDaysecondSnackFood" placeholder="İkinci araöğünde tükettiğiniz besinler nelerdir?"/>
                        </div>
                        <div>
                            <label>AKŞAM</label>
                            <input {...register("offDaydinnerFood")} type="text" className="form-control" name="offDaydinnerFood" placeholder="Akşam yemeğinde tükettiğiniz besinler nelerdir?"/>
                        </div>
                        <div>
                            <label>GECE</label>
                            <input {...register("offDaynightTimeFood")} type="text" className="form-control" name="offDaynightTimeFood" placeholder="Gece yatmadan tükettiğiniz besinler nelerdir?"/>
                        </div>
                         

                    
                </div>

                <button type="submit" className="btn btn-primary submit-btn">Submit</button>
            </form>       
    );
}