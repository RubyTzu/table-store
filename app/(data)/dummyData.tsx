import { AllPlace } from "@/app/(data)/type";

const storeData: AllPlace = {
  north: [
    { area: "北", name: "台北1", address: "台北市大安區", googlemap: "W27KwfstjTWyPMir8" },
    { area: "北", name: "台北2", address: "台北市信義區", googlemap: "varXSyeYdnRjFqCs9" },
    { area: "北", name: "台北3", address: "台北市中山區", googlemap: "kmaMsVdC1SRuhibt6" },
    { area: "北", name: "台北4", address: "台北市士林區", googlemap: "DMrVB5fM8xanfreU6" },
    { area: "北", name: "台北5", address: "台北市中正區", googlemap: "L3ALteoir34U2Q8S6" },
    { area: "北", name: "台北6", address: "台北市內湖區", googlemap: "1QpLnhDqJhmDtfz88" },
    { area: "北", name: "台北7", address: "台北市大安區", googlemap: "W27KwfstjTWyPMir8" },
    { area: "北", name: "台北8", address: "台北市信義區", googlemap: "varXSyeYdnRjFqCs9" },
    { area: "北", name: "台北9", address: "台北市中山區", googlemap: "kmaMsVdC1SRuhibt6" },
    { area: "北", name: "台北10", address: "台北市士林區", googlemap: "DMrVB5fM8xanfreU6" },
    { area: "北", name: "台北11", address: "台北市中正區", googlemap: "L3ALteoir34U2Q8S6" },
    { area: "北", name: "台北12", address: "台北市內湖區", googlemap: "1QpLnhDqJhmDtfz88" },
  ],
  central: [
    { area: "中", name: "台中1", address: "台中市北屯區", googlemap: "LEGX4Sp64uopKvvAA" },
    { area: "中", name: "台中2", address: "台中市東區", googlemap: "87iyyVq57hv3MvL49" },
    { area: "中", name: "台中3", address: "台中市西屯區", googlemap: "yAP5LJnE9cNenpBC6" },
    { area: "中", name: "台中4", address: "台中市西區", googlemap: "R9diPP8mUE8BnH5J8" },
    { area: "中", name: "台中5", address: "台中市南屯區", googlemap: "D81uQ28x2pC1mE748" },
  ],
  south: [
    { area: "南", name: "高雄1", address: "高雄市左營區", googlemap: "QGs2wDA1hpEDguZU6" },
    { area: "南", name: "高雄2", address: "高雄市前鎮區", googlemap: "ZcSsvXY1HffotwQp7" },
    { area: "南", name: "高雄3", address: "高雄市岡山區", googlemap: "czhd4TtVXbwnLs8E6" },
    { area: "南", name: "高雄4", address: "高雄市鼓山區", googlemap: "Znfp2mHRSPzZgSnW6" },
    { area: "南", name: "高雄5", address: "高雄市三民區", googlemap: "a7Rn7RGkdCt3YjXh8" },
  ],
};

storeData.all = [...storeData.north, ...storeData.central, ...storeData.south];

export { storeData };
