import { CarType } from "../types";

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "9691cc5db6mshc21dc434e16cfdep1313a3jsn4ac5cdbc02f3",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

//Fonksiyon asenkron olduğundan ve bir return değerine sahip
//olduğundan dolayı return tipini belirlerken sadece return edilen
//tpini CarType[] ifade etmek yerine bu fonksiyonun hatada döndürebileceğinden
// ve asenkron olduğundan dolayı bu tipi reactın içerisinde bulunan
//Promise tipine generic olarak göndererek return tipini belirledik.

type Parametres = {
  limit: number;
  make?: string;
  model?: string;
  fuel_type?: string;
  year?: string;
};

const fetchCars = async ({
  limit,
  make = "bmw",
  model = "m4",
  fuel_type = "",
  year = "",
}: Parametres): Promise<CarType[]> => {
  try {
    const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&model=${model}&limit=${limit}&fuel_type=${fuel_type}&year=${year}`;

    const res = await fetch(url, options);

    const data = await res.json();

    return data;
  } catch (err) {
    throw new Error("hata");
  }
};

export default fetchCars;
