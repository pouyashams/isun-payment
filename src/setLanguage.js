

export function setLanguage() {
    const language = sessionStorage.getItem('language');
    if (language === "persian") {
        const language = {
            rtl: true,
            home: "خانه",
            Credit: "اعتباری",
            Permanent: "دائمی",
            hourly: "ساعتی",
            Daily: "روزانه",
            threeDaily: "3 روزه",
            fourMonths: "4 ماهه",
            twoMonthly: "2 ماهه",
            Weekly: "هفتگی",
            monthly: "ماهانه",
            sixMonths: "6 ماه",
            threeMonths: "3 ماهه",
            yearly: "سالانه",
            services: "خدمات",
            aboutUs: "تماس با ما",
            rules: "قوانین",
            chargeStore: "آیسان پرداخت",
            typeOfRequest: "نوع درخواست",
            completeInformation: "تکمیل اطلاعات",
            payment: "پرداخت نهایی",
            charge: "شارژ مستقیم",
            internetPack: "بسته اینترنت",
            bill: "پرداخت قبض",
            pay: "پرداخت",
            amazingCharge: " شگفت انگیز",
            mobileNumber: "شماره موبایل خریدار",
            subscriberNumber: "شماره موبایل ذینفع",
            nationalCode: "شماره ملی خریدار",
            doHezar: "۲,۰۰۰ تومان",
            panjHezar: "۵,۰۰۰ تومان",
            dahHezar: "۱۰,۰۰۰ تومان",
            bistHezar: "۲۰,۰۰۰ تومان",
            panjaHezar: "۵۰,۰۰۰ تومان",
            sadHezar: "۱۰۰,۰۰۰ تومان",
            typeOfSim: "نوع سیمکارت",
            internetPeriod: "مدت بسته",
            chooseInternetPeriod: "انتخاب بسته",
            billId: "شناسه قبض",
            paymentId: "شناسه پرداخت",
            confirm: "تایید",
            price: "قیمت (تومان)",
            PaymentGateway: "درگاه پرداخت",
            bio: "(خرید با کلیه کارتهای بانکی امکان پذیر است)",
            footer: "تمامی حقوق این سایت محفوظ میباشید",
            waterBill: "قبض آب",
            ElectricBill: "قبض برق",
            gasBill: "قبض گاز",
            LandlinePhoneBill: "قبض تلفن ثابت",
            PhoneBill: "قبض موبایل همراه",
            mciCharge: "شارژ همراه اول",
            samantelCharge: "شارژ سامانتل",
            rightelCharge: "شارژ رایتل",
            mciNetPack: "بسته همراه اول",
            samantelNetPack: "بسته سامانتل",
            rightelNetPack: "بسته رایتل",
            irancellNetPack: "بسته ایرانسل",
            ruleTitle: "قوانین استفاده از خدمات فروشگاه",
            choose: "انتخاب کنید",
            ruleItems: [
                "تمامی حقوق مادی و معنوی این وبسایت متعلق به شرکت خدمات همراه آیسان می باشد.",
                "سرویس های ارائه شده در این وبسایت با مجوز از تمامی از ارگان‌ها و سازمان‌های نظارتی ارائه شده است.",
                "هرگونه اشتباه در وارد کردن اطلاعات توسط مشتریان بر عهده مشتریان می باشد.",
                "شرکت آیسان حق هرگونه تغییر و یا حذف سرویس را برای خود محفوظ می‌داند.",
                "شرکت آیسان وظیفه دارد تا در صورت تایید پرداخت توسط شبکه شاپرک سرویس مورد نظر مشتری را اعم از پرداخت قبض، شارژ و‌... در اسرع وقت ارائه نماید. در غیر اینصورت ظرف مدت 72 ساعت نسبت به عودت وجه به مشتری مورد نظر اقدام خواهد شد.",
                "در صورتی که مبلغ مورد نظر سرویس از حساب مشتریان کسر و سرویس مورد نظر به مشتری ارائه شود مراجع تایید ارائه سرویس اپراتور سرویس دهنده یا سازمان ارائه دهنده سرویس می باشند. در صورت استعلام و تایید شدن ارائه سرویس آیسان مسولیتی در قبال عدم ارائه سرویس نخواهد داشت.",
                "تمامی اطلاعات پرداخت اعم از شماره کارت، رمز اینترنتی و.... توسط شبکه شاپرک دریافت خواهد شد و آیسان حق هیچ گونه ذخیره سازی در این مورد را نخواهد داشت.",
                "استفاده از سرویس‌های وبسایت به منزله پذیرفتن قوانین و هم چنین عضویت در لیست مشتریان شرکت آیسان می‌باشد."
            ],
            contactItems: " جهت تماس با ما می توانید از راه های زیر اقدام فرمایید.\n" +
            "تلفن پشتیبانی : 021-22924567\n" +
            "نمابر : 22906883\n" +
            "ایمیل : info@isuncorp.com\n" +
            "تلگرام : 09100051482\n" +
            "نشانی : تهران - خیابان ظفر - پلاک 262 - طبقه 3 - واحد 8"
        };
        return language;

    }
    else if (language === "english") {
        const language = {
            rtl: false,
            home: "home",
            Credit: "pre Paid",
            Permanent: "post Paid",
            Daily: "daily",
            hourly: "hourly",
            Weekly: "weekly",
            threeDaily: "3 days",
            fourMonths: "4 months",
            twoMonthly: "2 months",
            monthly: "monthly",
            sixMonths: "6 months",
            threeMonths: "3 months",
            yearly: "yearly",
            services: "services",
            aboutUs: "contact us",
            rules: "rules",
            chargeStore: "ISUNCHARGE ",
            typeOfRequest: "type of request",
            completeInformation: "extra  information",
            payment: "payment",
            charge: "direct charge",
            internetPack: "internet package",
            bill: "paying bill ",
            amazingCharge: "amazing charge",
            mobileNumber: "mobile number",
            subscriberNumber: "subscriber number",
            nationalCode: "national code",
            doHezar: " 2,000 ",
            panjHezar: " 5,000",
            dahHezar: " 10,000",
            bistHezar: " 20,000",
            panjaHezar: " 50,000",
            sadHezar: " 100,000",
            typeOfSim: "type of simcard",
            internetPeriod: "internet period",
            chooseInternet: "choose package",
            billId: "bill ID",
            paymentId: "payment ID",
            confirm: "confirm",
            price: "(toman) price ",
            pay: "pay",
            PaymentGateway: "Payment gateway",
            bio: "(It's possible to purchase with all bank cards)",
            footer: "All rights reserved",
            waterBill: "water bill",
            ElectricBill: "electric bill",
            gasBill: "gas bill",
            LandlinePhoneBill: "landline phone bill",
            PhoneBill: "phone bill",
            mciCharge: "mci charge",
            samantelCharge: "samantel charge",
            rightelCharge: "rightel charge",
            mciNetPack: "mci internet",
            samantelNetPack: "samantel internet",
            rightelNetPack: "rightel internet",
            irancellNetPack: "irancell internet",
            chooseInternetPeriod: "choose internet",
            ruleItems: [
                "All intellectual property rights in this website are owned by ISUN Mobile Service Company", "The services provided on this website are provided with the authorization of all regulatory agencies", "Customers will be liable for any misstatement of customer information",
                "ISUN reserves the right to change or delete any service","Use of the Website Services constitutes acceptance of the rules and is also a subscription to ISUN's customer list"
            ],
            contactTitle: "contact us",
            choose: "choose",
            ruleTitle: "terms and conditions",
            contactItems: " Support phone : 021-22924567\n" +
            "Fax : 22906883\n"+"email : info@isuncorp.com\n"+"telegram : 09100051482\n"+"address : tehran/zafar street/Plaque262/third floor/Unit Eight\n"


        };
        return language;
    };
}


