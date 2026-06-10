const categories = ["Asuminen", "Ruoka", "Auto", "Lapset", "Sijoitukset", "Palvelut", "Velan maksu", "Säästö", "Muu"];
const storeKey = "family-budget-app-v3";
const oldStoreKey = "family-budget-app-v2";
const backupStoreKey = "family-budget-app-v3-backup";
const currencyOptions = {
  EUR: { intlCode: "EUR", label: "EUR" },
  USD: { intlCode: "USD", label: "USD" },
  RUB: { intlCode: "RUB", label: "RUB" },
};
const languageOptions = {
  fi: { label: "FI", locale: "fi-FI" },
  en: { label: "ENG", locale: "en-US" },
  ru: { label: "RU", locale: "ru-RU" },
};
const translations = {
  fi: {
    currency: "Valuutta", exportData: "Vie tiedot", importData: "Tuo tiedot", totalAssets: "Varallisuus yhteens\u00e4", totalDebt: "Velka yhteens\u00e4", netWorth: "Oma varallisuus",
    addCard: "+ Lis\u00e4\u00e4 diagrammi tai kortti", firstTab: "Luo ensimm\u00e4inen v\u00e4lilehti ja lis\u00e4\u00e4 siihen kortteja.", createTab: "Luo uusi v\u00e4lilehti",
    profile: "K\u00e4ytt\u00e4j\u00e4profiili", profileSubtitle: "Nimi, syntym\u00e4p\u00e4iv\u00e4, lapset, kieli ja valuutta", addProfile: "Lis\u00e4\u00e4 k\u00e4ytt\u00e4j\u00e4", saveProfile: "Tallenna profiili", activeProfile: "K\u00e4ytt\u00e4j\u00e4", firstName: "Nimi", lastName: "Sukunimi", birthday: "Syntym\u00e4p\u00e4iv\u00e4", language: "Kieli", children: "Lapset", childName: "Lapsen nimi", childBirthday: "Syntym\u00e4p\u00e4iv\u00e4", addChild: "Lis\u00e4\u00e4 lapsi", email: "S\u00e4hk\u00f6posti", account: "Tili", registerEmail: "Rekister\u00f6idy s\u00e4hk\u00f6postilla", familyMembers: "Perheen j\u00e4senet", addFamilyMember: "Lis\u00e4\u00e4 perheenj\u00e4sen", role: "Rooli",
    wealthChart: "Varallisuuden kasvu", netWorthTrend: "Oman varallisuuden kehitys", debtPie: "Velkojen jakauma", assetPie: "Varallisuuden jakauma", investmentCalculator: "Sijoituslaskuri", properties: "Kiinteist\u00f6t", cars: "Autot", debts: "Velat", investments: "Sijoitukset", assets: "Varat", events: "Tapahtumaloki", budget: "Budjetti ja tapahtumat", goals: "S\u00e4\u00e4st\u00f6tavoitteet", tips: "Talousvinkit",
    charts: "Diagrammit", cards: "Kortit", addProperty: "Lis\u00e4\u00e4 kiinteist\u00f6", addCar: "Lis\u00e4\u00e4 auto", addDebt: "Lis\u00e4\u00e4 velka", addAsset: "Lis\u00e4\u00e4 omaisuuser\u00e4", addGoal: "Lis\u00e4\u00e4 tavoite",
    profileTab: "Profiili", planTab: "Suunnitelma", propertyTab: "Kiinteist\u00f6t", investmentTab: "Sijoitukset",
    incomeMonthly: "Tulot / kk", expenseMonthly: "Kulut / kk", familyPositive: "Perhe on plussalla", familyNegative: "Perhe on miinuksella", income: "Tulot", expenses: "Kulut", allocation: "Kohdistus",
  },
  en: {
    currency: "Currency", exportData: "Export", importData: "Import", totalAssets: "Total assets", totalDebt: "Total debt", netWorth: "Net worth",
    addCard: "+ Add chart or card", firstTab: "Create the first tab and add cards.", createTab: "Create new tab",
    profile: "User profile", profileSubtitle: "Name, birthday, children, language and currency", addProfile: "Add user", saveProfile: "Save profile", activeProfile: "User", firstName: "First name", lastName: "Last name", birthday: "Birthday", language: "Language", children: "Children", childName: "Child name", childBirthday: "Birthday", addChild: "Add child", email: "Email", account: "Account", registerEmail: "Register with email", familyMembers: "Family members", addFamilyMember: "Add family member", role: "Role",
    wealthChart: "Wealth growth", netWorthTrend: "Net worth trend", debtPie: "Debt split", assetPie: "Asset split", investmentCalculator: "Investment calculator", properties: "Properties", cars: "Cars", debts: "Debts", investments: "Investments", assets: "Assets", events: "Event log", budget: "Budget and transactions", goals: "Savings goals", tips: "Finance tips",
    charts: "Charts", cards: "Cards", addProperty: "Add property", addCar: "Add car", addDebt: "Add debt", addAsset: "Add asset", addGoal: "Add goal",
    profileTab: "Profile", planTab: "Plan", propertyTab: "Properties", investmentTab: "Investments",
    incomeMonthly: "Income / month", expenseMonthly: "Expenses / month", familyPositive: "Family is positive", familyNegative: "Family is negative", income: "Income", expenses: "Expenses", allocation: "Allocation",
  },
  ru: {
    currency: "\u0412\u0430\u043b\u044e\u0442\u0430", exportData: "\u042d\u043a\u0441\u043f\u043e\u0440\u0442", importData: "\u0418\u043c\u043f\u043e\u0440\u0442", totalAssets: "\u0412\u0441\u0435 \u0430\u043a\u0442\u0438\u0432\u044b", totalDebt: "\u0412\u0441\u0435 \u0434\u043e\u043b\u0433\u0438", netWorth: "\u0427\u0438\u0441\u0442\u044b\u0439 \u043a\u0430\u043f\u0438\u0442\u0430\u043b",
    addCard: "+ \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u0443 \u0438\u043b\u0438 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443", firstTab: "\u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u043f\u0435\u0440\u0432\u0443\u044e \u0432\u043a\u043b\u0430\u0434\u043a\u0443 \u0438 \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438.", createTab: "\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0432\u043a\u043b\u0430\u0434\u043a\u0443",
    profile: "\u041f\u0440\u043e\u0444\u0438\u043b\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f", profileSubtitle: "\u0418\u043c\u044f, \u0434\u0435\u043d\u044c \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f, \u0434\u0435\u0442\u0438, \u044f\u0437\u044b\u043a \u0438 \u0432\u0430\u043b\u044e\u0442\u0430", addProfile: "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f", saveProfile: "\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c", activeProfile: "\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c", firstName: "\u0418\u043c\u044f", lastName: "\u0424\u0430\u043c\u0438\u043b\u0438\u044f", birthday: "\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f", language: "\u042f\u0437\u044b\u043a", children: "\u0414\u0435\u0442\u0438", childName: "\u0418\u043c\u044f \u0440\u0435\u0431\u0435\u043d\u043a\u0430", childBirthday: "\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f", addChild: "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0440\u0435\u0431\u0435\u043d\u043a\u0430", email: "\u042d\u043b. \u043f\u043e\u0447\u0442\u0430", account: "\u0410\u043a\u043a\u0430\u0443\u043d\u0442", registerEmail: "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043f\u043e email", familyMembers: "\u0427\u043b\u0435\u043d\u044b \u0441\u0435\u043c\u044c\u0438", addFamilyMember: "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0447\u043b\u0435\u043d\u0430 \u0441\u0435\u043c\u044c\u0438", role: "\u0420\u043e\u043b\u044c",
    wealthChart: "\u0420\u043e\u0441\u0442 \u043a\u0430\u043f\u0438\u0442\u0430\u043b\u0430", netWorthTrend: "\u0414\u0438\u043d\u0430\u043c\u0438\u043a\u0430 \u043a\u0430\u043f\u0438\u0442\u0430\u043b\u0430", debtPie: "\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0434\u043e\u043b\u0433\u043e\u0432", assetPie: "\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0430\u043a\u0442\u0438\u0432\u043e\u0432", investmentCalculator: "\u0418\u043d\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u043a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440", properties: "\u041d\u0435\u0434\u0432\u0438\u0436\u0438\u043c\u043e\u0441\u0442\u044c", cars: "\u0410\u0432\u0442\u043e", debts: "\u0414\u043e\u043b\u0433\u0438", investments: "\u0418\u043d\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0438", assets: "\u0410\u043a\u0442\u0438\u0432\u044b", events: "\u0416\u0443\u0440\u043d\u0430\u043b", budget: "\u0411\u044e\u0434\u0436\u0435\u0442 \u0438 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438", goals: "\u0426\u0435\u043b\u0438 \u043d\u0430\u043a\u043e\u043f\u043b\u0435\u043d\u0438\u0439", tips: "\u0424\u0438\u043d\u0430\u043d\u0441\u043e\u0432\u044b\u0435 \u0441\u043e\u0432\u0435\u0442\u044b",
    charts: "\u0414\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u044b", cards: "\u041a\u0430\u0440\u0442\u043e\u0447\u043a\u0438", addProperty: "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u0435\u0434\u0432\u0438\u0436\u0438\u043c\u043e\u0441\u0442\u044c", addCar: "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0430\u0432\u0442\u043e", addDebt: "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0434\u043e\u043b\u0433", addAsset: "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0430\u043a\u0442\u0438\u0432", addGoal: "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0446\u0435\u043b\u044c",
    profileTab: "\u041f\u0440\u043e\u0444\u0438\u043b\u044c", planTab: "\u041f\u043b\u0430\u043d", propertyTab: "\u041d\u0435\u0434\u0432\u0438\u0436\u0438\u043c\u043e\u0441\u0442\u044c", investmentTab: "\u0418\u043d\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0438",
    incomeMonthly: "\u0414\u043e\u0445\u043e\u0434 / \u043c\u0435\u0441\u044f\u0446", expenseMonthly: "\u0420\u0430\u0441\u0445\u043e\u0434\u044b / \u043c\u0435\u0441\u044f\u0446", familyPositive: "\u0421\u0435\u043c\u044c\u044f \u0432 \u043f\u043b\u044e\u0441\u0435", familyNegative: "\u0421\u0435\u043c\u044c\u044f \u0432 \u043c\u0438\u043d\u0443\u0441\u0435", income: "\u0414\u043e\u0445\u043e\u0434\u044b", expenses: "\u0420\u0430\u0441\u0445\u043e\u0434\u044b", allocation: "\u0420\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435",
  },
};
const currency = { format: (value) => formatCurrency(value) };
const dateFormat = new Intl.DateTimeFormat("fi-FI", { day: "numeric", month: "numeric", year: "numeric" });
const state = loadState();
let photoViewer = { propertyId: "", index: 0 };
let cardResizeObserver = null;
let draggedCardId = "";
let editingFinancialEventId = "";
const carCatalog = {
  Audi: ["A1", "A3", "A4", "A5", "A6", "Q2", "Q3", "Q5", "Q7", "e-tron"],
  BMW: ["1 Series", "2 Series", "3 Series", "4 Series", "5 Series", "X1", "X3", "X5", "i3", "i4"],
  Citroen: ["C3", "C4", "C5 Aircross", "Berlingo", "Jumpy"],
  Dacia: ["Duster", "Sandero", "Logan", "Jogger", "Spring"],
  Fiat: ["500", "Panda", "Tipo", "Doblo", "Ducato"],
  Ford: ["Fiesta", "Focus", "Mondeo", "Kuga", "Puma", "Transit"],
  Honda: ["Civic", "Jazz", "CR-V", "HR-V", "Accord"],
  Hyundai: ["i10", "i20", "i30", "Kona", "Tucson", "IONIQ 5"],
  Kia: ["Ceed", "Rio", "Sportage", "Sorento", "Niro", "EV6"],
  Mazda: ["Mazda2", "Mazda3", "Mazda6", "CX-3", "CX-5", "MX-5"],
  "Mercedes-Benz": ["A-Class", "B-Class", "C-Class", "E-Class", "GLA", "GLC", "Vito"],
  Mitsubishi: ["ASX", "Outlander", "Eclipse Cross", "L200"],
  Nissan: ["Micra", "Note", "Juke", "Qashqai", "X-Trail", "Leaf"],
  Opel: ["Corsa", "Astra", "Insignia", "Mokka", "Grandland", "Vivaro"],
  Peugeot: ["208", "308", "508", "2008", "3008", "5008", "Partner"],
  Renault: ["Clio", "Megane", "Captur", "Kadjar", "Trafic", "Zoe"],
  Skoda: ["Fabia", "Octavia", "Superb", "Kamiq", "Karoq", "Kodiaq", "Enyaq"],
  Subaru: ["Impreza", "Legacy", "Outback", "Forester", "XV"],
  Tesla: ["Model 3", "Model S", "Model X", "Model Y"],
  Toyota: ["Aygo", "Yaris", "Corolla", "Avensis", "Camry", "C-HR", "RAV4", "Prius"],
  Volkswagen: ["Polo", "Golf", "Passat", "T-Roc", "Tiguan", "Touran", "Caddy", "Transporter", "ID.3", "ID.4"],
  Volvo: ["V40", "V60", "V70", "V90", "XC40", "XC60", "XC90"],
};
const tabSuggestions = ["Kiinteistöt", "Sijoitukset", "Budjetti", "Velat", "Säästöt", "Lapset", "Autot", "Tapahtumat", "Talousvinkit"];
const cardSuggestions = [
  ["investmentCalculator", "Sijoituslaskuri"],
  ["properties", "Kiinteistöt"],
  ["cars", "Autot"],
  ["debts", "Velat"],
  ["investments", "Sijoitukset"],
  ["assets", "Varat"],
  ["events", "Tapahtumaloki"],
  ["budget", "Budjetti ja tapahtumat"],
  ["goals", "Säästötavoitteet"],
  ["tips", "Talousvinkit"],
];
const chartSuggestions = [
  ["netWorthTrend", "Oman varallisuuden kehitys"],
  ["debtPie", "Velkojen jakauma"],
  ["assetPie", "Varallisuuden jakauma"],
];

const el = {
  loginPage: document.querySelector("#loginPage"),
  loginForm: document.querySelector("#loginForm"),
  loginEmail: document.querySelector("#loginEmail"),
  loginEyebrow: document.querySelector("#loginEyebrow"),
  loginTitle: document.querySelector("#loginTitle"),
  loginSubtitle: document.querySelector("#loginSubtitle"),
  loginEmailLabel: document.querySelector("#loginEmailLabel"),
  authMessage: document.querySelector("#authMessage"),
  loginBtn: document.querySelector("#loginBtn"),
  registerBtn: document.querySelector("#registerBtn"),
  topbar: document.querySelector(".topbar"),
  appEyebrow: document.querySelector("#appEyebrow"),
  appTitle: document.querySelector("#appTitle"),
  languageSelect: document.querySelector("#languageSelect"),
  languageFlag: document.querySelector("#languageFlag"),
  languagePickerLabel: document.querySelector("#languagePickerLabel"),
  openProfilePageBtn: document.querySelector("#openProfilePageBtn"),
  profileInitials: document.querySelector("#profileInitials"),
  profileButtonText: document.querySelector("#profileButtonText"),
  currencyPickerLabel: document.querySelector("#currencyPickerLabel"),
  currencySelect: document.querySelector("#currencySelect"),
  appShell: document.querySelector(".app-shell"),
  profilePage: document.querySelector("#profilePage"),
  profilePageBody: document.querySelector("#profilePageBody"),
  profileAvatar: document.querySelector("#profileAvatar"),
  profilePageEyebrow: document.querySelector("#profilePageEyebrow"),
  profilePageTitle: document.querySelector("#profilePageTitle"),
  profilePageSubtitle: document.querySelector("#profilePageSubtitle"),
  backToAppBtn: document.querySelector("#backToAppBtn"),
  totalAssets: document.querySelector("#totalAssets"),
  totalDebt: document.querySelector("#totalDebt"),
  netWorth: document.querySelector("#netWorth"),
  heroNetWorth: document.querySelector("#heroNetWorth"),
  heroMonthlyGrowth: document.querySelector("#heroMonthlyGrowth"),
  heroSavingsRate: document.querySelector("#heroSavingsRate"),
  heroInvestmentShare: document.querySelector("#heroInvestmentShare"),
  heroGoalProgress: document.querySelector("#heroGoalProgress"),
  customTabs: document.querySelector("#customTabs"),
  openTabEditDialogBtn: document.querySelector("#openTabEditDialogBtn"),
  tabDialog: document.querySelector("#tabDialog"),
  tabSuggestions: document.querySelector("#tabSuggestions"),
  newTabForm: document.querySelector("#newTabForm"),
  newTabName: document.querySelector("#newTabName"),
  cancelTabBtn: document.querySelector("#cancelTabBtn"),
  tabEditDialog: document.querySelector("#tabEditDialog"),
  tabEditForm: document.querySelector("#tabEditForm"),
  editTabName: document.querySelector("#editTabName"),
  cancelTabEditBtn: document.querySelector("#cancelTabEditBtn"),
  deleteTabConfirmBtn: document.querySelector("#deleteTabConfirmBtn"),
  cardTypeSelect: document.querySelector("#cardTypeSelect"),
  pageCards: document.querySelector("#pageCards"),
  cardDialog: document.querySelector("#cardDialog"),
  cardForm: document.querySelector("#cardForm"),
  cardSuggestions: document.querySelector("#cardSuggestions"),
  cancelCardBtn: document.querySelector("#cancelCardBtn"),
  chartSuggestions: document.querySelector("#chartSuggestions"),
  budgetDialog: document.querySelector("#budgetDialog"),
  budgetForm: document.querySelector("#budgetForm"),
  budgetCategory: document.querySelector("#budgetCategory"),
  budgetLimit: document.querySelector("#budgetLimit"),
  cancelBudgetBtn: document.querySelector("#cancelBudgetBtn"),
  goalDialog: document.querySelector("#goalDialog"),
  goalForm: document.querySelector("#goalForm"),
  goalName: document.querySelector("#goalName"),
  goalTarget: document.querySelector("#goalTarget"),
  goalSaved: document.querySelector("#goalSaved"),
  cancelGoalBtn: document.querySelector("#cancelGoalBtn"),
  debtDialog: document.querySelector("#debtDialog"),
  debtForm: document.querySelector("#debtForm"),
  debtDialogTitle: document.querySelector("#debtDialogTitle"),
  debtId: document.querySelector("#debtId"),
  debtName: document.querySelector("#debtName"),
  debtPrincipalLabel: document.querySelector("#debtPrincipalLabel"),
  debtPrincipal: document.querySelector("#debtPrincipal"),
  debtOriginalPrincipal: document.querySelector("#debtOriginalPrincipal"),
  debtDrawdownDate: document.querySelector("#debtDrawdownDate"),
  debtLoanType: document.querySelector("#debtLoanType"),
  debtRate: document.querySelector("#debtRate"),
  debtPayment: document.querySelector("#debtPayment"),
  debtOriginalPayment: document.querySelector("#debtOriginalPayment"),
  debtOriginalPayoffDate: document.querySelector("#debtOriginalPayoffDate"),
  debtInterestEstimate: document.querySelector("#debtInterestEstimate"),
  debtNotes: document.querySelector("#debtNotes"),
  debtDetailsPanel: document.querySelector("#debtDetailsPanel"),
  debtChartBox: document.querySelector("#debtChartBox"),
  debtEventsList: document.querySelector("#debtEventsList"),
  addDebtEventBtn: document.querySelector("#addDebtEventBtn"),
  cancelDebtBtn: document.querySelector("#cancelDebtBtn"),
  assetDialog: document.querySelector("#assetDialog"),
  assetForm: document.querySelector("#assetForm"),
  assetName: document.querySelector("#assetName"),
  assetPlace: document.querySelector("#assetPlace"),
  assetValue: document.querySelector("#assetValue"),
  assetType: document.querySelector("#assetType"),
  assetGoalName: document.querySelector("#assetGoalName"),
  assetGoalAmount: document.querySelector("#assetGoalAmount"),
  cancelAssetBtn: document.querySelector("#cancelAssetBtn"),
  assetEditDialog: document.querySelector("#assetEditDialog"),
  assetEditForm: document.querySelector("#assetEditForm"),
  editAssetId: document.querySelector("#editAssetId"),
  editAssetName: document.querySelector("#editAssetName"),
  editAssetPlace: document.querySelector("#editAssetPlace"),
  editAssetValue: document.querySelector("#editAssetValue"),
  editAssetType: document.querySelector("#editAssetType"),
  editAssetGoalName: document.querySelector("#editAssetGoalName"),
  editAssetGoalAmount: document.querySelector("#editAssetGoalAmount"),
  assetOverviewPanel: document.querySelector("#assetOverviewPanel"),
  cancelAssetEditBtn: document.querySelector("#cancelAssetEditBtn"),
  investmentDialog: document.querySelector("#investmentDialog"),
  investmentDialogForm: document.querySelector("#investmentDialogForm"),
  investmentDialogTitle: document.querySelector("#investmentDialogTitle"),
  investmentId: document.querySelector("#investmentId"),
  investmentName: document.querySelector("#investmentName"),
  investmentPlace: document.querySelector("#investmentPlace"),
  investmentValue: document.querySelector("#investmentValue"),
  investmentMonthly: document.querySelector("#investmentMonthly"),
  investmentTargetDate: document.querySelector("#investmentTargetDate"),
  investmentExpectedReturn: document.querySelector("#investmentExpectedReturn"),
  investmentGoalName: document.querySelector("#investmentGoalName"),
  investmentGoalAmount: document.querySelector("#investmentGoalAmount"),
  investmentType: document.querySelector("#investmentType"),
  investmentChartBox: document.querySelector("#investmentChartBox"),
  investmentEventsList: document.querySelector("#investmentEventsList"),
  addInvestmentEventBtn: document.querySelector("#addInvestmentEventBtn"),
  cancelInvestmentBtn: document.querySelector("#cancelInvestmentBtn"),
  propertyDialog: document.querySelector("#propertyDialog"),
  propertyForm: document.querySelector("#propertyForm"),
  propertyDialogTitle: document.querySelector("#propertyDialogTitle"),
  propertyId: document.querySelector("#propertyId"),
  propertyAddress: document.querySelector("#propertyAddress"),
  propertyType: document.querySelector("#propertyType"),
  propertyPurchasePrice: document.querySelector("#propertyPurchasePrice"),
  propertyValue: document.querySelector("#propertyValue"),
  propertyLoan: document.querySelector("#propertyLoan"),
  propertyRate: document.querySelector("#propertyRate"),
  propertyPayment: document.querySelector("#propertyPayment"),
  propertyFee: document.querySelector("#propertyFee"),
  propertyRent: document.querySelector("#propertyRent"),
  propertyDetailsPanel: document.querySelector("#propertyDetailsPanel"),
  propertyPhotoGrid: document.querySelector("#propertyPhotoGrid"),
  propertyPhotos: document.querySelector("#propertyPhotos"),
  propertyNotes: document.querySelector("#propertyNotes"),
  propertyTenantFirstName: document.querySelector("#propertyTenantFirstName"),
  propertyTenantLastName: document.querySelector("#propertyTenantLastName"),
  propertyTenantId: document.querySelector("#propertyTenantId"),
  propertyRentReviewDate: document.querySelector("#propertyRentReviewDate"),
  propertyCostsPanel: document.querySelector("#propertyCostsPanel"),
  propertyCostType: document.querySelector("#propertyCostType"),
  propertyCostAmount: document.querySelector("#propertyCostAmount"),
  propertyCostRecurrence: document.querySelector("#propertyCostRecurrence"),
  propertyCostDate: document.querySelector("#propertyCostDate"),
  propertyCostNote: document.querySelector("#propertyCostNote"),
  addPropertyCostBtn: document.querySelector("#addPropertyCostBtn"),
  propertyCostsTotal: document.querySelector("#propertyCostsTotal"),
  propertyCostsList: document.querySelector("#propertyCostsList"),
  cancelPropertyBtn: document.querySelector("#cancelPropertyBtn"),
  carDialog: document.querySelector("#carDialog"),
  carForm: document.querySelector("#carForm"),
  carDialogTitle: document.querySelector("#carDialogTitle"),
  carId: document.querySelector("#carId"),
  carPlate: document.querySelector("#carPlate"),
  carBrand: document.querySelector("#carBrand"),
  carModel: document.querySelector("#carModel"),
  carMakeList: document.querySelector("#carMakeList"),
  carModelList: document.querySelector("#carModelList"),
  carYear: document.querySelector("#carYear"),
  carPurchaseYear: document.querySelector("#carPurchaseYear"),
  carPurchasePrice: document.querySelector("#carPurchasePrice"),
  carCurrentValue: document.querySelector("#carCurrentValue"),
  carLoan: document.querySelector("#carLoan"),
  carRate: document.querySelector("#carRate"),
  carPayment: document.querySelector("#carPayment"),
  carCostsPanel: document.querySelector("#carCostsPanel"),
  carCostType: document.querySelector("#carCostType"),
  carCostAmount: document.querySelector("#carCostAmount"),
  carCostDate: document.querySelector("#carCostDate"),
  carCostNote: document.querySelector("#carCostNote"),
  addCarCostBtn: document.querySelector("#addCarCostBtn"),
  carCostsTotal: document.querySelector("#carCostsTotal"),
  carCostsList: document.querySelector("#carCostsList"),
  cancelCarBtn: document.querySelector("#cancelCarBtn"),
  exportBtn: document.querySelector("#exportBtn"),
  logoutBtn: document.querySelector("#logoutBtn"),
  importLabel: document.querySelector("#importLabel"),
  importInput: document.querySelector("#importInput"),
  financialEventDialog: document.querySelector("#financialEventDialog"),
  financialEventForm: document.querySelector("#financialEventForm"),
  financialEventDialogTitle: document.querySelector("#financialEventDialogTitle"),
  financialEventKind: document.querySelector("#financialEventKind"),
  financialEventTarget: document.querySelector("#financialEventTarget"),
  financialEventCurrent: document.querySelector("#financialEventCurrent"),
  financialEventMode: document.querySelector("#financialEventMode"),
  financialEventDirection: document.querySelector("#financialEventDirection"),
  financialEventAmountLabel: document.querySelector("#financialEventAmountLabel"),
  financialEventAmount: document.querySelector("#financialEventAmount"),
  financialEventDate: document.querySelector("#financialEventDate"),
  financialEventNote: document.querySelector("#financialEventNote"),
  financialEventResult: document.querySelector("#financialEventResult"),
  deleteFinancialEventBtn: document.querySelector("#deleteFinancialEventBtn"),
  cancelFinancialEventBtn: document.querySelector("#cancelFinancialEventBtn"),
  eventLogDialog: document.querySelector("#eventLogDialog"),
  eventLogDialogList: document.querySelector("#eventLogDialogList"),
  closeEventLogBtn: document.querySelector("#closeEventLogBtn"),
  addEventFromLogBtn: document.querySelector("#addEventFromLogBtn"),
  restoreDeletedEventBtn: document.querySelector("#restoreDeletedEventBtn"),
  goalDetailDialog: document.querySelector("#goalDetailDialog"),
  goalDetailTitle: document.querySelector("#goalDetailTitle"),
  goalDetailMeta: document.querySelector("#goalDetailMeta"),
  goalDetailChart: document.querySelector("#goalDetailChart"),
  goalDetailSummary: document.querySelector("#goalDetailSummary"),
  closeGoalDetailBtn: document.querySelector("#closeGoalDetailBtn"),
  summaryDetailDialog: document.querySelector("#summaryDetailDialog"),
  summaryDetailTitle: document.querySelector("#summaryDetailTitle"),
  summaryDetailText: document.querySelector("#summaryDetailText"),
  summaryDetailFormula: document.querySelector("#summaryDetailFormula"),
  summaryDetailList: document.querySelector("#summaryDetailList"),
  closeSummaryDetailBtn: document.querySelector("#closeSummaryDetailBtn"),
  investmentBudgetDialog: document.querySelector("#investmentBudgetDialog"),
  investmentBudgetMeta: document.querySelector("#investmentBudgetMeta"),
  investmentBudgetList: document.querySelector("#investmentBudgetList"),
  closeInvestmentBudgetBtn: document.querySelector("#closeInvestmentBudgetBtn"),
  photoViewerDialog: document.querySelector("#photoViewerDialog"),
  photoViewerImage: document.querySelector("#photoViewerImage"),
  photoViewerCaption: document.querySelector("#photoViewerCaption"),
  closePhotoViewerBtn: document.querySelector("#closePhotoViewerBtn"),
  prevPhotoBtn: document.querySelector("#prevPhotoBtn"),
  nextPhotoBtn: document.querySelector("#nextPhotoBtn"),
};

init();

// ============================================================
// SUPABASE: käynnistys
// ============================================================
async function init() {
  populateSelect(el.budgetCategory, categories);
  populateCarMakeList();
  updateCarModelList();
  renderTabSuggestions();
  renderCardSuggestions();
  renderChartSuggestions();
  setupEditableTitles();
  bindEvents();

  // Näytä lataava tila ennen Supabase-initialisointia
  el.loginPage.hidden = false;
  el.topbar.hidden = true;
  if (el.appShell) el.appShell.hidden = true;

  // Supabase auth callbacks
  window._onSupabaseSignIn = async () => {
    const cloudData = await SupabaseAuth.loadState();
    if (cloudData) {
      Object.assign(state, normalizeState(cloudData));
    }
    render();
  };
  window._onSupabaseSignOut = () => {
    state.authEmail = "";
    render();
  };

  // Alusta Supabase ja tarkista sessio
  const user = await SupabaseAuth.init();
  if (user) {
    state.authEmail = user.email;
    const cloudData = await SupabaseAuth.loadState();
    if (cloudData) Object.assign(state, normalizeState(cloudData));
    applyActiveProfileSettings();
  }
  render();
}

function bindEvents() {
  el.loginForm.addEventListener("submit", handleLoginSubmit);
  el.registerBtn.addEventListener("click", handleLoginSubmit);
  el.openTabEditDialogBtn.addEventListener("click", openTabEditDialog);
  el.cancelTabBtn.addEventListener("click", () => el.tabDialog.close());
  el.cancelTabEditBtn.addEventListener("click", () => el.tabEditDialog.close());
  el.tabEditForm.addEventListener("submit", saveTabEdit);
  el.deleteTabConfirmBtn.addEventListener("click", deleteActiveTabFromDialog);
  el.newTabForm.addEventListener("submit", addCustomTab);
  el.cancelCardBtn.addEventListener("click", () => el.cardDialog.close());
  el.openProfilePageBtn.addEventListener("click", openProfilePage);
  el.backToAppBtn.addEventListener("click", closeProfilePage);
  el.languageSelect.addEventListener("change", () => {
    state.language = validLanguage(el.languageSelect.value);
    const profile = activeProfile();
    if (profile) profile.language = state.language;
    saveAndRender();
  });
  el.currencySelect.addEventListener("change", () => {
    state.currency = validCurrency(el.currencySelect.value);
    const profile = activeProfile();
    if (profile) profile.currency = state.currency;
    saveAndRender();
  });
  el.pageCards.addEventListener("click", handleBoardClick);
  el.pageCards.addEventListener("keydown", handleBoardKeydown);
  el.pageCards.addEventListener("submit", handleBoardSubmit);
  el.pageCards.addEventListener("change", handleBoardChange);
  el.pageCards.addEventListener("dragstart", handleCardDragStart);
  el.pageCards.addEventListener("dragover", handleCardDragOver);
  el.pageCards.addEventListener("drop", handleCardDrop);
  el.pageCards.addEventListener("dragend", handleCardDragEnd);
  el.profilePage.addEventListener("click", handleBoardClick);
  el.profilePage.addEventListener("submit", handleBoardSubmit);
  el.profilePage.addEventListener("change", handleBoardChange);
  el.budgetForm.addEventListener("submit", addBudget);
  el.cancelBudgetBtn.addEventListener("click", () => el.budgetDialog.close());
  el.goalForm.addEventListener("submit", addGoal);
  el.cancelGoalBtn.addEventListener("click", () => el.goalDialog.close());
  el.debtForm.addEventListener("submit", saveDebt);
  el.cancelDebtBtn.addEventListener("click", () => el.debtDialog.close());
  el.addDebtEventBtn.addEventListener("click", openDebtEventDialog);
  el.debtEventsList.addEventListener("click", handleBoardClick);
  [el.debtPrincipal, el.debtOriginalPrincipal, el.debtDrawdownDate, el.debtLoanType, el.debtRate, el.debtOriginalPayment, el.debtOriginalPayoffDate].forEach((field) => {
    field.addEventListener("input", updateDebtPlanPreview);
    field.addEventListener("change", updateDebtPlanPreview);
  });
  el.assetForm.addEventListener("submit", addAsset);
  el.cancelAssetBtn.addEventListener("click", () => el.assetDialog.close());
  el.assetEditForm.addEventListener("submit", saveAssetEdit);
  el.cancelAssetEditBtn.addEventListener("click", () => el.assetEditDialog.close());
  el.investmentDialogForm.addEventListener("submit", saveInvestmentDialog);
  el.cancelInvestmentBtn.addEventListener("click", () => el.investmentDialog.close());
  el.addInvestmentEventBtn.addEventListener("click", openInvestmentEventDialog);
  el.investmentEventsList.addEventListener("click", handleBoardClick);
  el.propertyForm.addEventListener("submit", saveProperty);
  el.cancelPropertyBtn.addEventListener("click", () => el.propertyDialog.close());
  el.addPropertyCostBtn.addEventListener("click", addPropertyCostFromDialog);
  el.propertyCostsList.addEventListener("click", handleBoardClick);
  el.propertyPhotoGrid.addEventListener("click", handleBoardClick);
  el.propertyPhotos.addEventListener("change", () => addPropertyPhotosFromDialog(el.propertyPhotos.files));
  el.carForm.addEventListener("submit", saveCar);
  el.carBrand.addEventListener("input", () => updateCarModelList(el.carBrand.value));
  el.carBrand.addEventListener("change", () => updateCarModelList(el.carBrand.value));
  el.cancelCarBtn.addEventListener("click", () => el.carDialog.close());
  el.addCarCostBtn.addEventListener("click", addCarCostFromDialog);
  el.carCostsList.addEventListener("click", handleBoardClick);
  el.exportBtn.addEventListener("click", exportData);
  el.logoutBtn.addEventListener("click", logout);
  el.importInput.addEventListener("change", importData);
  document.querySelectorAll("[data-open-summary-detail]").forEach((node) => {
    node.addEventListener("click", () => openSummaryDetailDialog(node.dataset.openSummaryDetail));
    node.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openSummaryDetailDialog(node.dataset.openSummaryDetail);
      }
    });
  });
  el.financialEventForm.addEventListener("submit", saveFinancialEventFromDialog);
  el.cancelFinancialEventBtn.addEventListener("click", () => el.financialEventDialog.close());
  el.deleteFinancialEventBtn.addEventListener("click", deleteFinancialEventFromDialog);
  el.closeEventLogBtn.addEventListener("click", () => el.eventLogDialog.close());
  el.addEventFromLogBtn.addEventListener("click", () => openFinancialEventDialog());
  el.restoreDeletedEventBtn.addEventListener("click", restoreLastDeletedFinancialEvent);
  el.eventLogDialogList.addEventListener("click", handleBoardClick);
  el.closeGoalDetailBtn.addEventListener("click", () => el.goalDetailDialog.close());
  el.closeSummaryDetailBtn.addEventListener("click", () => el.summaryDetailDialog.close());
  el.closeInvestmentBudgetBtn.addEventListener("click", () => el.investmentBudgetDialog.close());
  el.investmentBudgetList.addEventListener("click", handleBoardClick);
  el.financialEventKind.addEventListener("change", () => populateFinancialEventTargets());
  el.financialEventTarget.addEventListener("change", updateFinancialEventPreview);
  el.financialEventMode.addEventListener("change", updateFinancialEventPreview);
  el.financialEventDirection.addEventListener("change", updateFinancialEventPreview);
  el.financialEventAmount.addEventListener("input", updateFinancialEventPreview);
  el.closePhotoViewerBtn.addEventListener("click", () => el.photoViewerDialog.close());
  el.prevPhotoBtn.addEventListener("click", () => movePropertyPhoto(-1));
  el.nextPhotoBtn.addEventListener("click", () => movePropertyPhoto(1));
  el.photoViewerDialog.addEventListener("keydown", handlePhotoViewerKeydown);
  bindDialogBackdropAutosave();
  window.addEventListener("resize", () => requestAnimationFrame(layoutMasonryBoard));
  window.addEventListener("pointerup", saveResizedCards);
}

function saveResizedCards() {
  document.querySelectorAll(".planner-card[data-resizing='true']").forEach((article) => {
    delete article.dataset.resizing;
    article.closest(".card-board")?.classList.remove("is-resizing-card");
    saveCardSize(article.dataset.cardId, article);
  });
}

function bindDialogBackdropAutosave() {
  document.querySelectorAll("dialog").forEach((dialog) => {
    dialog.addEventListener("pointerdown", (event) => {
      if (event.target !== dialog) return;
      dialog.dataset.backdropPointer = "true";
    });
    dialog.addEventListener("pointerup", (event) => {
      if (event.target !== dialog || dialog.dataset.backdropPointer !== "true") {
        delete dialog.dataset.backdropPointer;
        return;
      }
      delete dialog.dataset.backdropPointer;
      saveAndCloseDialogFromBackdrop(dialog);
    });
  });
}

function saveAndCloseDialogFromBackdrop(dialog) {
  const form = dialog.querySelector("form");
  if (!form) {
    dialog.close();
    return;
  }
  if (form.id === "cardForm") {
    dialog.close();
    return;
  }
  if (form.id === "newTabForm" && !el.newTabName.value.trim()) {
    dialog.close();
    return;
  }
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  form.requestSubmit();
}

function renderCardSuggestions() {
  el.cardSuggestions.innerHTML = "";
  cardSuggestions.forEach(([type, label]) => {
    const button = document.createElement("button");
    button.className = "suggestion-button";
    button.type = "button";
    button.textContent = t(type) || label;
    button.addEventListener("click", () => {
      addCardToActiveTab(type);
      el.cardDialog.close();
    });
    el.cardSuggestions.append(button);
  });
}

function renderChartSuggestions() {
  el.chartSuggestions.innerHTML = "";
  chartSuggestions.forEach(([type, label]) => {
    const button = document.createElement("button");
    button.className = "suggestion-button";
    button.type = "button";
    button.textContent = t(type) || label;
    button.addEventListener("click", () => {
      addCardToActiveTab(type);
      el.cardDialog.close();
    });
    el.chartSuggestions.append(button);
  });
}

function populateCarMakeList() {
  el.carMakeList.innerHTML = Object.keys(carCatalog)
    .sort((a, b) => a.localeCompare(b))
    .map((make) => `<option value="${escapeHtml(make)}"></option>`)
    .join("");
}

function updateCarModelList(makeValue = el.carBrand.value) {
  const make = matchCarMake(makeValue);
  const models = make ? carCatalog[make] : [];
  el.carModelList.innerHTML = models
    .map((model) => `<option value="${escapeHtml(model)}"></option>`)
    .join("");
}

function matchCarMake(value) {
  const normalized = String(value || "").trim().toLowerCase();
  return Object.keys(carCatalog).find((make) => make.toLowerCase() === normalized) || "";
}

function renderTabSuggestions() {
  el.tabSuggestions.innerHTML = "";
  translatedTabSuggestions().forEach((name) => {
    const button = document.createElement("button");
    button.className = "suggestion-button";
    button.type = "button";
    button.textContent = name;
    button.addEventListener("click", () => {
      el.newTabName.value = name;
    });
    el.tabSuggestions.append(button);
  });
}

function render() {
  renderAuthGate();
  renderChromeText();
  renderCardSuggestions();
  renderChartSuggestions();
  renderTabSuggestions();
  renderSummary();
  renderProfileChrome();
  renderProfilePage();
  renderTabs();
  renderActiveCards();
}

function renderAuthGate() {
  const authenticated = SupabaseAuth.isAuthenticated();
  el.loginPage.hidden = authenticated;
  el.topbar.hidden = !authenticated;
  el.appShell.hidden = !authenticated || !el.profilePage.hidden;
  if (!authenticated) el.profilePage.hidden = true;
  el.loginEmail.value = state.authEmail || "";
}

function renderSummary() {
  state.language = validLanguage(state.language);
  state.currency = validCurrency(state.currency);
  el.appEyebrow.textContent = state.appHeader.eyebrow;
  el.appTitle.textContent = state.appHeader.title;
  document.documentElement.lang = state.language;
  el.languageSelect.value = state.language;
  el.languageFlag.className = `flag-badge flag-${state.language}`;
  el.currencySelect.value = state.currency;
  const assets = totalAssets();
  const debts = totalDebts();
  const netWorth = assets - debts;
  const monthlyGrowth = currentMonthNetWorthGrowth(netWorth);
  const savingsRate = monthlySavingsRate();
  const investmentShare = assets ? (totalInvestments() * 100) / assets : 0;
  const goalProgress = familyGoalProgress();
  document.querySelector(".metric.assets span").textContent = t("totalAssets");
  document.querySelector(".metric.debt span").textContent = t("totalDebt");
  document.querySelector(".metric.networth span").textContent = t("netWorth");
  el.totalAssets.textContent = currency.format(assets);
  el.totalDebt.textContent = currency.format(debts);
  el.netWorth.textContent = currency.format(netWorth);
  el.heroNetWorth.textContent = currency.format(netWorth);
  el.heroMonthlyGrowth.textContent = `${monthlyGrowth >= 0 ? "+" : "-"}${currency.format(Math.abs(monthlyGrowth))} tässä kuussa`;
  el.heroMonthlyGrowth.className = `hero-trend ${monthlyGrowth >= 0 ? "positive" : "warning"}`;
  el.heroSavingsRate.textContent = formatPercent(savingsRate);
  el.heroInvestmentShare.textContent = formatPercent(investmentShare);
  el.heroGoalProgress.textContent = formatPercent(goalProgress);
}

function renderChromeText() {
  el.loginEyebrow.textContent = state.appHeader.eyebrow;
  el.loginTitle.textContent = state.language === "en" ? "Sign in" : state.language === "ru" ? "\u0412\u043e\u0439\u0442\u0438" : "Kirjaudu sisään";
  el.loginSubtitle.textContent = state.language === "en" ? "Use a registered email or create a new user." : state.language === "ru" ? "\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 email \u0438\u043b\u0438 \u0441\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u043d\u043e\u0432\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f." : "Käytä rekisteröityä sähköpostia tai luo uusi käyttäjä.";
  el.loginEmailLabel.firstChild.textContent = `${t("email")} `;
  el.loginBtn.textContent = state.language === "en" ? "Sign in" : state.language === "ru" ? "\u0412\u043e\u0439\u0442\u0438" : "Kirjaudu";
  el.registerBtn.textContent = t("registerEmail");
  el.currencyPickerLabel.firstChild.textContent = `${t("currency")} `;
  el.exportBtn.textContent = t("exportData");
  el.importLabel.firstChild.textContent = t("importData");
  el.logoutBtn.textContent = state.language === "en" ? "Sign out" : state.language === "ru" ? "\u0412\u044b\u0439\u0442\u0438" : "Kirjaudu ulos";
  el.openTabEditDialogBtn.title = state.language === "en" ? "Edit tab" : state.language === "ru" ? "\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u043a\u043b\u0430\u0434\u043a\u0443" : "Muokkaa v\u00e4lilehte\u00e4";
  el.cardDialog.querySelector("h2").textContent = t("addCard").replace("+ ", "");
  el.cardDialog.querySelectorAll("h3")[0].textContent = t("charts");
  el.cardDialog.querySelectorAll("h3")[1].textContent = t("cards");
}

function openSummaryDetailDialog(type) {
  const details = summaryDetailData(type);
  el.summaryDetailTitle.textContent = details.title;
  el.summaryDetailText.textContent = details.text;
  el.summaryDetailFormula.innerHTML = details.formula;
  el.summaryDetailList.innerHTML = details.items.length
    ? details.items.map((item) => `
      <article class="budget-item summary-detail-item">
        <div class="budget-top">
          <div>
            <strong>${escapeHtml(item.name)}</strong>
            <p class="muted">${escapeHtml(item.meta || "")}</p>
          </div>
          <strong>${currency.format(item.value)}</strong>
        </div>
      </article>
    `).join("")
    : emptyStateHtml("Ei erittelyrivejä.");
  el.summaryDetailDialog.showModal();
}

function summaryDetailData(type) {
  const assets = totalAssets();
  const debts = totalDebts();
  const netWorth = assets - debts;
  if (type === "debt") {
    const items = state.debts.map((debt) => ({
      name: debt.name,
      meta: `${Number(debt.annualRate || 0).toFixed(2)} % · ${currency.format(debt.monthlyPayment || 0)} / kk`,
      value: Number(debt.principal || 0),
    }));
    return {
      title: "Velka yhteensä",
      text: "Tämä luku on kaikkien avoimien velkojen nykyisten saldojen summa.",
      formula: `Velka yhteensä = <strong>${currency.format(debts)}</strong>`,
      items,
    };
  }
  if (type === "netWorth") {
    return {
      title: "Oma varallisuus",
      text: "Oma varallisuus kertoo, paljonko perheelle jää, kun kaikista varoista vähennetään kaikki velat.",
      formula: `Oma varallisuus = <strong>${currency.format(netWorth)}</strong>`,
      items: [
        { name: "Varallisuus yhteensä", meta: "Varat, sijoitukset ja autojen nykyarvot", value: assets },
        { name: "Velka yhteensä", meta: "Kaikkien lainojen ja velkojen nykyiset saldot", value: -debts },
      ],
    };
  }
  const assetItems = [
    ...state.assets.map((asset) => ({ name: asset.name, meta: `${assetTypeLabel(asset.type)}${asset.place ? ` · ${asset.place}` : ""}`, value: Number(asset.value || 0) })),
    ...state.investments.map((investment) => ({ name: investment.name, meta: `Sijoitus${investment.place ? ` · ${investment.place}` : ""}`, value: Number(investment.value || 0) })),
    ...state.cars.map((car) => ({ name: `${car.brand || ""} ${car.model || ""}`.trim() || "Auto", meta: `${car.plate || "Auto"} · nykyarvo`, value: Number(car.currentValue || 0) })),
  ].filter((item) => item.value !== 0);
  return {
    title: "Varallisuus yhteensä",
    text: "Tämä luku muodostuu omaisuuseristä, sijoituksista ja autojen nykyarvoista. Velkoja ei vähennetä tässä luvussa.",
    formula: `Varallisuus yhteensä = <strong>${currency.format(assets)}</strong>`,
    items: assetItems,
  };
}

function renderProfileChrome() {
  const profile = activeProfile();
  const initials = profileInitials(profile);
  const displayChar = profile?.avatarEmoji || initials;
  el.profileInitials.textContent = displayChar;
  el.profileButtonText.textContent = t("profile");
  el.profileAvatar.textContent = displayChar;
  if (profile) {
    el.profileAvatar.style.setProperty("--avatar-color", profileAvatarColor(profile));
    el.profileAvatar.style.background = "var(--avatar-color, var(--soft-blue))";
  }
  el.profilePageEyebrow.textContent = t("profile");
  el.profilePageTitle.textContent = profile ? profileFullName(profile) : t("profile");
  el.profilePageSubtitle.textContent = t("profileSubtitle");
  el.backToAppBtn.textContent = state.language === "en" ? "Back" : state.language === "ru" ? "\u041d\u0430\u0437\u0430\u0434" : "Takaisin";
}

function renderProfilePage() {
  el.profilePageBody.innerHTML = profilePageHtml();
}

function openProfilePage() {
  el.appShell.hidden = true;
  el.profilePage.hidden = false;
  renderProfilePage();
}

function closeProfilePage() {
  el.profilePage.hidden = true;
  el.appShell.hidden = false;
}

// ============================================================
// SUPABASE AUTH: OTP login (magic code sähköpostiin)
// ============================================================
let _otpEmailPending = null;

async function handleLoginSubmit(event) {
  if (event?.preventDefault) event.preventDefault();
  const email = normalizeEmail(el.loginEmail.value);
  if (!email || !el.loginEmail.checkValidity()) {
    showAuthMessage("Kirjoita toimiva sähköpostiosoite.", "error");
    return;
  }
  if (_otpEmailPending) {
    const code = el.otpInput?.value?.trim();
    if (!code) { showAuthMessage("Syötä sähköpostiin saapunut koodi.", "error"); return; }
    try {
      setLoginLoading(true);
      await SupabaseAuth.verifyOtp(email, code);
      showAuthMessage("", "");
      _otpEmailPending = null;
      renderLoginStep("email");
    } catch {
      showAuthMessage("Koodi on virheellinen tai vanhentunut.", "error");
    } finally {
      setLoginLoading(false);
    }
  } else {
    try {
      setLoginLoading(true);
      await SupabaseAuth.sendOtp(email);
      _otpEmailPending = email;
      renderLoginStep("otp");
      showAuthMessage(`Koodi lähetetty: ${email}`, "success");
    } catch {
      showAuthMessage("Virhe koodin lähetyksessä. Tarkista sähköpostiosoite.", "error");
    } finally {
      setLoginLoading(false);
    }
  }
}

function renderLoginStep(step) {
  if (step === "otp") {
    el.loginEmailLabel.style.display = "none";
    if (!el.otpInput) {
      const label = document.createElement("label");
      label.id = "otpLabel";
      label.innerHTML = `Kirjautumiskoodi<input id="otpInput" type="text" inputmode="numeric" pattern="[0-9]*" maxlength="8" placeholder="12345678" autocomplete="one-time-code" />`;
      el.loginForm.insertBefore(label, el.authMessage);
      el.otpInput = document.getElementById("otpInput");
    } else {
      document.getElementById("otpLabel").style.display = "";
    }
    el.loginBtn.textContent = "Kirjaudu sisään";
    el.registerBtn.style.display = "none";
    if (!el.backToEmailBtn) {
      const btn = document.createElement("button");
      btn.id = "backToEmailBtn";
      btn.className = "ghost-button";
      btn.type = "button";
      btn.textContent = "← Vaihda sähköpostia";
      btn.addEventListener("click", () => {
        _otpEmailPending = null;
        renderLoginStep("email");
        showAuthMessage("", "");
      });
      el.loginForm.querySelector(".login-actions").appendChild(btn);
      el.backToEmailBtn = btn;
    } else {
      el.backToEmailBtn.style.display = "";
    }
  } else {
    el.loginEmailLabel.style.display = "";
    if (document.getElementById("otpLabel")) document.getElementById("otpLabel").style.display = "none";
    el.loginBtn.textContent = "Jatka";
    el.registerBtn.style.display = "";
    if (el.backToEmailBtn) el.backToEmailBtn.style.display = "none";
  }
}

function showAuthMessage(text, type) {
  el.authMessage.textContent = text;
  el.authMessage.className = `auth-message${type ? " " + type : ""}`;
}

function setLoginLoading(loading) {
  el.loginBtn.disabled = loading;
  el.loginBtn.textContent = loading ? "Lähetetään…"
    : (_otpEmailPending ? "Kirjaudu sisään" : "Jatka");
}

function loginWithEmail(event) { handleLoginSubmit(event); }
function registerWithEmail() { handleLoginSubmit(); }

function logout() {
  SupabaseAuth.signOut();
  state.authEmail = "";
  closeProfilePage();
  render();
}

function setupEditableTitles() {
  makeInlineEditable(el.appEyebrow, "eyebrow");
  makeInlineEditable(el.appTitle, "title");
}

function makeInlineEditable(node, key) {
  node.addEventListener("click", () => startInlineTitleEdit(node, key));
  node.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      startInlineTitleEdit(node, key);
    }
  });
}

function startInlineTitleEdit(node, key) {
  if (node.querySelector("input")) return;
  const input = document.createElement("input");
  input.className = "inline-title-input";
  input.value = state.appHeader[key];
  node.textContent = "";
  node.append(input);
  input.focus();
  input.select();

  let cancelled = false;
  const save = () => {
    if (cancelled) return;
    const value = input.value.trim();
    if (value) state.appHeader[key] = value;
    saveAndRender();
  };

  input.addEventListener("blur", save, { once: true });
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") input.blur();
    if (event.key === "Escape") {
      cancelled = true;
      render();
    }
  });
}

function renderTabs() {
  el.customTabs.innerHTML = "";
  state.customTabs.forEach((tab) => {
    const button = document.createElement("button");
    button.className = `tab-button ${tab.id === state.activeTabId ? "active" : ""}`;
    button.type = "button";
    button.draggable = true;
    button.dataset.tabId = tab.id;
    button.textContent = tab.name;
    button.addEventListener("click", () => {
      state.activeTabId = tab.id;
      saveAndRender();
    });
    button.addEventListener("dragstart", (event) => {
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", tab.id);
      button.classList.add("dragging");
    });
    button.addEventListener("dragend", () => {
      button.classList.remove("dragging");
      el.customTabs.querySelectorAll(".tab-button").forEach((item) => item.classList.remove("drop-target"));
    });
    button.addEventListener("dragover", (event) => {
      event.preventDefault();
      event.dataTransfer.dropEffect = "move";
      el.customTabs.querySelectorAll(".tab-button").forEach((item) => item.classList.remove("drop-target"));
      button.classList.add("drop-target");
    });
    button.addEventListener("drop", (event) => {
      event.preventDefault();
      reorderTabs(event.dataTransfer.getData("text/plain"), tab.id);
    });
    el.customTabs.append(button);
  });
  const plus = document.createElement("button");
  plus.className = "plus-button tab-plus-button";
  plus.type = "button";
  plus.title = t("createTab");
  plus.textContent = "+";
  plus.addEventListener("dragover", (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  });
  plus.addEventListener("drop", (event) => {
    event.preventDefault();
    moveTabToEnd(event.dataTransfer.getData("text/plain"));
  });
  plus.addEventListener("click", () => el.tabDialog.showModal());
  el.customTabs.append(plus);
}

function renderActiveCards() {
  const tab = activeTab();
  el.pageCards.innerHTML = "";
  resetCardResizeObserver();
  if (!tab) {
    el.pageCards.append(emptyState("Luo ensimmäinen välilehti ja lisää siihen kortteja."));
    layoutMasonryBoard();
    return;
  }

  if (!tab.cards.length) {
    el.pageCards.append(addCardBox());
    layoutMasonryBoard();
    return;
  }

  tab.cards.forEach((card) => {
    el.pageCards.append(renderCard(card));
  });
  el.pageCards.append(addCardBox());
  requestAnimationFrame(layoutMasonryBoard);
}

function addCardBox() {
  const box = emptyState(t("addCard"));
  box.classList.add("clickable-empty");
  box.addEventListener("click", () => el.cardDialog.showModal());
  return box;
}

function reorderTabs(sourceId, targetId) {
  if (!sourceId || !targetId || sourceId === targetId) return;
  const sourceIndex = state.customTabs.findIndex((tab) => tab.id === sourceId);
  const targetIndex = state.customTabs.findIndex((tab) => tab.id === targetId);
  if (sourceIndex < 0 || targetIndex < 0) return;
  const [moved] = state.customTabs.splice(sourceIndex, 1);
  const nextTargetIndex = state.customTabs.findIndex((tab) => tab.id === targetId);
  state.customTabs.splice(nextTargetIndex, 0, moved);
  saveAndRender();
}

function moveTabToEnd(sourceId) {
  const sourceIndex = state.customTabs.findIndex((tab) => tab.id === sourceId);
  if (sourceIndex < 0 || sourceIndex === state.customTabs.length - 1) return;
  const [moved] = state.customTabs.splice(sourceIndex, 1);
  state.customTabs.push(moved);
  saveAndRender();
}

function renderCard(card) {
  const article = document.createElement("article");
  article.className = `panel planner-card ${card.type === "budget" ? "wide-card budget-workspace-card" : ""}`;
  article.dataset.cardId = card.id;
  applyCardSize(article, card);
  article.addEventListener("pointerdown", (event) => {
    if (event.target.closest("[data-card-drag]")) return;
    article.dataset.resizing = "true";
    article.closest(".card-board")?.classList.add("is-resizing-card");
  });
  article.addEventListener("pointerup", () => {
    delete article.dataset.resizing;
    article.closest(".card-board")?.classList.remove("is-resizing-card");
    saveCardSize(card.id, article);
  });
  article.addEventListener("mouseup", () => saveCardSize(card.id, article));
  article.innerHTML = cardHeader(card);
  const body = document.createElement("div");
  body.className = "planner-card-body";
  body.innerHTML = cardBody(card.type);
  article.append(body);
  attachCardRuntime(article, card.type);
  observeMasonryCard(article);
  return article;
}

function applyCardSize(article, card) {
  const size = card.size || {};
  const colSpan = Math.max(1, Math.round(Number(size.colSpan || 1)));
  if (colSpan > 1) article.style.gridColumn = `span ${colSpan}`;
  article.style.width = "100%";
  if (size.height) article.style.height = `${size.height}px`;
}

function saveCardSize(cardId, article, options = {}) {
  const tab = activeTab();
  const card = tab?.cards.find((item) => item.id === cardId);
  if (!card) return;
  const width = Math.round(article.getBoundingClientRect().width);
  const height = Math.round(article.getBoundingClientRect().height);
  if (width < 240 || height < 120) return;
  const colSpan = calculateCardColumnSpan(article, width);
  const previous = card.size || {};
  if (previous.width === width && previous.height === height && previous.colSpan === colSpan) return;
  card.size = { width, height, colSpan };
  persistState();
  if (!options.skipLayout) layoutMasonryBoard();
}

function calculateCardColumnSpan(article, width) {
  const board = article.closest(".card-board");
  if (!board) return 1;
  const styles = getComputedStyle(board);
  const columns = styles.gridTemplateColumns.split(" ").filter(Boolean);
  const columnCount = Math.max(1, columns.length);
  const gap = parseFloat(styles.columnGap || styles.gap) || 0;
  const firstColumnWidth = parseFloat(columns[0]) || width;
  const span = Math.ceil((width + gap) / Math.max(firstColumnWidth + gap, 1));
  return Math.min(columnCount, Math.max(1, span));
}

function resetCardResizeObserver() {
  if (cardResizeObserver) cardResizeObserver.disconnect();
  cardResizeObserver = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
      const article = entry.target;
      if (!article.classList.contains("planner-card")) return;
      if (article.dataset.resizeReady !== "true") {
        article.dataset.resizeReady = "true";
        return;
      }
      clearTimeout(article._cardResizeTimer);
      article._cardResizeTimer = setTimeout(() => {
        const isResizing = article.dataset.resizing === "true";
        saveCardSize(article.dataset.cardId, article, { skipLayout: isResizing });
        if (!isResizing) layoutMasonryBoard();
      }, article.dataset.resizing ? 260 : 700);
    });
  });
}

function observeMasonryCard(article) {
  if (!cardResizeObserver) resetCardResizeObserver();
  cardResizeObserver.observe(article);
}

function layoutMasonryBoard() {
  const board = el.pageCards;
  if (!board) return;
  const styles = getComputedStyle(board);
  const rowHeight = parseFloat(styles.getPropertyValue("grid-auto-rows")) || 10;
  const rowGap = parseFloat(styles.rowGap) || 0;
  board.querySelectorAll(".planner-card, .clickable-empty").forEach((item) => {
    item.style.gridRowEnd = "";
    const visibleHeight = item.getBoundingClientRect().height;
    const contentHeight = item.scrollHeight;
    const height = Math.max(visibleHeight, contentHeight);
    if (item.classList.contains("planner-card")) {
      item.style.minHeight = `${Math.ceil(cardContentMinHeight(item))}px`;
    }
    const span = Math.max(1, Math.ceil((height + rowGap) / (rowHeight + rowGap)));
    item.style.gridRowEnd = `span ${span}`;
  });
}

function cardContentMinHeight(article) {
  const styles = getComputedStyle(article);
  const verticalPadding = parseFloat(styles.paddingTop) + parseFloat(styles.paddingBottom);
  const header = article.querySelector(".panel-heading");
  const body = article.querySelector(".planner-card-body");
  const bodyStyles = body ? getComputedStyle(body) : null;
  const bodyGap = bodyStyles ? parseFloat(bodyStyles.rowGap || bodyStyles.gap) || 0 : 0;
  const contentHeight = (header?.scrollHeight || 0) + (body?.scrollHeight || 0) + bodyGap + verticalPadding;
  return Math.max(160, contentHeight);
}

function cardHeader(card) {
  return `
    <div class="panel-heading with-action">
      <div>
        <h2>${escapeHtml(cardTitle(card.type))}</h2>
        <p class="muted">${escapeHtml(cardSubtitle(card.type))}</p>
      </div>
      <div class="row-actions">
        <button class="card-drag-handle" type="button" draggable="true" title="Siirrä korttia" data-card-drag="${card.id}" aria-label="Siirrä korttia">::</button>
        <button class="delete-button" type="button" title="Poista kortti" data-remove-card="${card.id}">x</button>
      </div>
    </div>
  `;
}

function cardBody(type) {
  if (type === "profile") return profileCardHtml();
  if (type === "wealthChart") return `<div class="wealth-chart">${wealthChartSvg()}</div>`;
  if (type === "netWorthTrend") return `${chartRangeControls("netWorth")}<div class="wealth-chart">${wealthChartSvg(state.chartRanges.netWorth)}</div>`;
  if (type === "debtPie") return `<div class="chart-box">${pieChartSvg(debtPieData(), "Velat yhteensä")}</div>`;
  if (type === "assetPie") return `<div class="chart-box">${pieChartSvg(assetPieData(), "Varat yhteensä")}</div>`;
  if (type === "investmentCalculator") return investmentCalculatorHtml();
  if (type === "properties") return `<div class="with-action card-action"><span></span><button class="primary-button" type="button" data-open-property>Lisää kiinteistö</button></div><div class="property-grid">${propertiesHtml()}</div>`;
  if (type === "cars") return `<div class="with-action card-action"><span></span><button class="primary-button" type="button" data-open-car>${t("addCar")}</button></div><div class="item-list">${carsHtml()}</div>`;
  if (type === "debts") return `<div class="with-action card-action"><span></span><button class="primary-button" type="button" data-open-debt>Lisää velka</button></div><div class="item-list">${debtsHtml()}</div>`;
  if (type === "investments") return `<div class="with-action card-action investment-create-action"><span></span><button class="primary-button investment-create-button" type="button" data-open-investment>Tee uusi sijoitus</button></div><div class="item-list spaced-list">${investmentsHtml()}</div>`;
  if (type === "assets") return `<div class="with-action card-action"><span></span><button class="primary-button" type="button" data-open-asset>Lisää omaisuuserä</button></div><div class="asset-card-grid">${assetsHtml()}</div>`;
  if (type === "events") return eventLogHtml();
  if (type === "budget") return `${budgetPlanHtml()}`;
  if (type === "goals") return `<div class="with-action card-action"><span></span><button class="primary-button" type="button" data-open-goal>Lisää tavoite</button></div><div class="item-list">${goalsHtml()}</div>`;
  if (type === "tips") return `${tipFormHtml()}<div class="item-list spaced-list">${tipsHtml()}</div>`;
  return "";
}

function attachCardRuntime(article, type) {
  if (type === "properties") hydratePropertyDetails(article);
}

function handleBoardClick(event) {
  const target = event.target;
  const inlineAssetTarget = target.closest("[data-edit-inline-asset]");
  if (inlineAssetTarget) startInlineAssetEdit(inlineAssetTarget);
  const inlineBudgetTarget = target.closest("[data-edit-inline-budget-type]");
  if (inlineBudgetTarget) startInlineBudgetTypeEdit(inlineBudgetTarget);
  const inlineInvestmentTarget = target.closest("[data-edit-inline-investment]");
  if (inlineInvestmentTarget) {
    startInlineInvestmentEdit(inlineInvestmentTarget);
    return;
  }
  if (target.matches("[data-remove-card]")) removeCard(target.dataset.removeCard);
  if (target.matches("[data-open-property]")) openNewPropertyDialog();
  if (target.matches("[data-open-car]")) openNewCarDialog();
  if (target.matches("[data-open-debt]")) openNewDebtDialog();
  if (target.matches("[data-open-asset]")) el.assetDialog.showModal();
  if (target.matches("[data-open-investment]")) openNewInvestmentDialog();
  if (target.matches("[data-open-goal]")) el.goalDialog.showModal();
  if (target.matches("[data-open-financial-event]")) openFinancialEventDialog();
  const eventLogTarget = target.closest("[data-open-event-log]");
  if (eventLogTarget && !target.closest("button, input, select, textarea, label, a")) {
    openEventLogDialog();
    return;
  }
  const financialEventItem = target.closest("[data-open-financial-event-detail]");
  if (financialEventItem && !target.closest("button, input, select, textarea, label, a")) {
    openFinancialEventDialog(financialEventItem.dataset.openFinancialEventDetail);
    return;
  }
  const goalCard = target.closest("[data-open-goal-detail]");
  if (goalCard && !target.closest("button, input, select, textarea, label, a")) {
    openGoalDetailDialog(goalCard.dataset.openGoalDetail);
    return;
  }
  const investmentBudgetCard = target.closest("[data-open-investment-budget]");
  if (investmentBudgetCard && !target.closest("button, input, select, textarea, label, a")) {
    openInvestmentBudgetDialog();
    return;
  }
  if (target.matches("[data-delete-property]")) {
    deleteProperty(target.dataset.deleteProperty);
    return;
  }
  if (target.matches("[data-delete-property-cost]")) {
    deletePropertyCost(target.dataset.deletePropertyCost);
    return;
  }
  const propertyPhotoButton = target.closest("[data-open-property-photo]");
  if (propertyPhotoButton) {
    openPropertyPhotoViewer(propertyPhotoButton.dataset.propertyId, Number(propertyPhotoButton.dataset.photoIndex || 0));
    return;
  }
  if (target.matches("[data-delete-car]")) {
    deleteCar(target.dataset.deleteCar);
    return;
  }
  if (target.matches("[data-delete-car-cost]")) {
    deleteCarCost(target.dataset.deleteCarCost);
    return;
  }
  const carCard = target.closest("[data-open-car-detail]");
  if (carCard && !target.closest("button, input, select, textarea, label, a")) openCarDialog(carCard.dataset.openCarDetail);
  const propertyCard = target.closest("[data-open-property-detail]");
  if (propertyCard && !target.closest("button, input, select, textarea, label, a")) openPropertyDialog(propertyCard.dataset.openPropertyDetail);
  const assetCard = target.closest("[data-open-asset-detail]");
  if (assetCard && !target.closest("button, input, select, textarea, label, a")) {
    openAssetEditDialog(assetCard.dataset.openAssetDetail);
    return;
  }
  const debtCard = target.closest("[data-open-debt-detail]");
  if (debtCard && !target.closest("button, input, select, textarea, label, a")) {
    openDebtDialog(debtCard.dataset.openDebtDetail);
    return;
  }
  const investmentCard = target.closest("[data-open-investment-detail]");
  if (investmentCard && !target.closest("button, input, select, textarea, label, a")) {
    if (el.investmentBudgetDialog.open) el.investmentBudgetDialog.close();
    openInvestmentDialog(investmentCard.dataset.openInvestmentDetail);
    return;
  }
  if (target.matches("[data-edit-property]")) editPropertyById(target.dataset.editProperty);
  if (target.matches("[data-save-property-details]")) savePropertyDetails(target.dataset.savePropertyDetails);
  if (target.matches("[data-delete-debt]")) deleteById("debts", target.dataset.deleteDebt);
  if (target.matches("[data-edit-asset]")) openAssetEditDialog(target.dataset.editAsset);
  if (target.matches("[data-delete-asset]")) deleteById("assets", target.dataset.deleteAsset);
  if (target.matches("[data-delete-goal]")) deleteById("goals", target.dataset.deleteGoal);
  if (target.matches("[data-delete-investment]")) deleteById("investments", target.dataset.deleteInvestment);
  if (target.matches("[data-delete-tip]")) deleteById("tips", target.dataset.deleteTip);
  if (target.matches("[data-delete-transaction]")) deleteById("transactions", target.dataset.deleteTransaction);
  if (target.matches("[data-delete-financial-event]")) {
    deleteFinancialEvent(target.dataset.deleteFinancialEvent);
    return;
  }
  if (target.matches("[data-delete-budget]")) deleteById("budgets", target.dataset.deleteBudget);
  if (target.matches("[data-delete-budget-type]")) deleteBudgetType(target.dataset.deleteBudgetType);
  if (target.matches("[data-delete-child]")) deleteChild(target.dataset.deleteChild);
  if (target.matches("[data-delete-family-member]")) deleteFamilyMember(target.dataset.deleteFamilyMember);
  // Avatar emoji picker toggle
  if (target.matches("[data-open-avatar-picker]") || target.closest("[data-open-avatar-picker]")) {
    const row = document.getElementById("avatarPickerRow");
    if (row) row.hidden = !row.hidden;
    return;
  }
  // Avatar emoji set
  if (target.matches("[data-set-avatar-emoji]")) {
    const profile = activeProfile();
    if (profile) {
      profile.avatarEmoji = target.dataset.setAvatarEmoji || "";
      saveAndRender();
    }
    return;
  }
  // Profile page sign-out button
  if (target.id === "profileSignOutBtn") {
    logout();
    return;
  }
}

function handleBoardKeydown(event) {
  if (event.target.matches("input, select, textarea")) return;
  const carCard = event.target.closest("[data-open-car-detail]");
  if (carCard && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    openCarDialog(carCard.dataset.openCarDetail);
    return;
  }
  const propertyCard = event.target.closest("[data-open-property-detail]");
  if (propertyCard && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    openPropertyDialog(propertyCard.dataset.openPropertyDetail);
    return;
  }
  const assetCard = event.target.closest("[data-open-asset-detail]");
  if (assetCard && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    openAssetEditDialog(assetCard.dataset.openAssetDetail);
    return;
  }
  const debtCard = event.target.closest("[data-open-debt-detail]");
  if (debtCard && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    openDebtDialog(debtCard.dataset.openDebtDetail);
    return;
  }
  const investmentCard = event.target.closest("[data-open-investment-detail]");
  if (investmentCard && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    if (el.investmentBudgetDialog.open) el.investmentBudgetDialog.close();
    openInvestmentDialog(investmentCard.dataset.openInvestmentDetail);
    return;
  }
  const financialEventItem = event.target.closest("[data-open-financial-event-detail]");
  if (financialEventItem && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    openFinancialEventDialog(financialEventItem.dataset.openFinancialEventDetail);
    return;
  }
  const goalCard = event.target.closest("[data-open-goal-detail]");
  if (goalCard && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    openGoalDetailDialog(goalCard.dataset.openGoalDetail);
    return;
  }
  const investmentBudgetCard = event.target.closest("[data-open-investment-budget]");
  if (investmentBudgetCard && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    openInvestmentBudgetDialog();
    return;
  }
  const eventLogTarget = event.target.closest("[data-open-event-log]");
  if (eventLogTarget && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    openEventLogDialog();
    return;
  }
  const target = event.target.closest("[data-edit-inline-asset]");
  const budgetTarget = event.target.closest("[data-edit-inline-budget-type]");
  if (!target && !budgetTarget) return;
  if (event.key === "Enter") {
    event.preventDefault();
    if (target) startInlineAssetEdit(target);
    if (budgetTarget) startInlineBudgetTypeEdit(budgetTarget);
  }
}

function handleCardDragStart(event) {
  const handle = event.target.closest("[data-card-drag]");
  if (!handle) {
    event.preventDefault();
    return;
  }
  const card = handle.closest(".planner-card");
  if (!card) return;
  draggedCardId = card.dataset.cardId || "";
  card.classList.add("card-dragging");
  el.pageCards.classList.add("is-dragging-card");
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("text/plain", draggedCardId);
}

function handleCardDragOver(event) {
  if (!draggedCardId) return;
  const targetCard = event.target.closest(".planner-card");
  if (!targetCard || targetCard.dataset.cardId === draggedCardId) return;
  event.preventDefault();
  event.dataTransfer.dropEffect = "move";
  const draggedCard = el.pageCards.querySelector(`.planner-card[data-card-id="${draggedCardId}"]`);
  if (!draggedCard) return;
  const targetBox = targetCard.getBoundingClientRect();
  const insertAfter = event.clientY > targetBox.top + targetBox.height / 2 || event.clientX > targetBox.left + targetBox.width / 2;
  el.pageCards.insertBefore(draggedCard, insertAfter ? targetCard.nextSibling : targetCard);
  requestAnimationFrame(layoutMasonryBoard);
}

function handleCardDrop(event) {
  if (!draggedCardId) return;
  event.preventDefault();
  saveCardOrderFromDom();
  handleCardDragEnd();
}

function handleCardDragEnd() {
  document.querySelectorAll(".card-dragging").forEach((card) => card.classList.remove("card-dragging"));
  el.pageCards.classList.remove("is-dragging-card");
  draggedCardId = "";
  requestAnimationFrame(layoutMasonryBoard);
}

function saveCardOrderFromDom() {
  const tab = activeTab();
  if (!tab) return;
  const byId = new Map(tab.cards.map((card) => [card.id, card]));
  const orderedIds = [...el.pageCards.querySelectorAll(".planner-card[data-card-id]")].map((card) => card.dataset.cardId);
  const orderedCards = orderedIds.map((id) => byId.get(id)).filter(Boolean);
  const missingCards = tab.cards.filter((card) => !orderedIds.includes(card.id));
  tab.cards = [...orderedCards, ...missingCards];
  persistState();
}

function handleBoardSubmit(event) {
  if (event.target.matches("[data-transaction-form]")) {
    event.preventDefault();
    addTransactionFromForm(event.target);
  }
  if (event.target.matches("[data-allocation-form]")) {
    event.preventDefault();
    addAllocationFromForm(event.target);
  }
  if (event.target.matches("[data-financial-event-form]")) {
    event.preventDefault();
    addFinancialEventFromForm(event.target);
  }
  if (event.target.matches("[data-investment-form]")) {
    event.preventDefault();
    addInvestmentFromForm(event.target);
  }
  if (event.target.matches("[data-tip-form]")) {
    event.preventDefault();
    addTipFromForm(event.target);
  }
  if (event.target.matches("[data-budget-type-form]")) {
    event.preventDefault();
    addBudgetTypeFromForm(event.target);
  }
  if (event.target.matches("[data-profile-form]")) {
    event.preventDefault();
    saveProfileFromForm(event.target);
  }
  if (event.target.matches("[data-child-form]")) {
    event.preventDefault();
    addChildFromForm(event.target);
  }
  if (event.target.matches("[data-register-email-form]")) {
    event.preventDefault();
    registerEmailFromForm(event.target);
  }
  if (event.target.matches("[data-family-member-form]")) {
    event.preventDefault();
    addFamilyMemberFromForm(event.target);
  }
  if (event.target.matches("[data-car-cost-form]")) {
    event.preventDefault();
    addCarCostFromForm(event.target);
  }
}

function handleBoardChange(event) {
  const target = event.target;
  if (target.matches("[data-property-photos]")) addPropertyPhotos(target.dataset.propertyPhotos, target.files);
  if (target.matches("[data-toggle-tip]")) {
    const tip = state.tips.find((item) => item.id === target.dataset.toggleTip);
    if (tip) tip.done = target.checked;
    saveAndRender();
  }
  if (target.matches("[data-chart-range]")) {
    state.chartRanges[target.dataset.chartRange] = target.value;
    saveAndRender();
  }
  if (target.matches("[data-investment-calculator]")) {
    updateCalculatorSetting(target.name, target.value);
  }
}

function addCustomTab(event) {
  event.preventDefault();
  const name = el.newTabName.value.trim();
  if (!name) return;
  const tab = { id: crypto.randomUUID(), name, cards: [] };
  state.customTabs.push(tab);
  state.activeTabId = tab.id;
  el.newTabForm.reset();
  el.tabDialog.close();
  saveAndRender();
}

function addCardToActiveTab(type = el.cardTypeSelect?.value || "properties") {
  const tab = activeTab();
  if (!tab) return;
  tab.cards.push({ id: crypto.randomUUID(), type });
  saveAndRender();
}

function openTabEditDialog() {
  const tab = activeTab();
  if (!tab) return;
  el.editTabName.value = tab.name;
  el.tabEditDialog.showModal();
}

function saveTabEdit(event) {
  event.preventDefault();
  const tab = activeTab();
  if (!tab) return;
  const name = el.editTabName.value.trim();
  if (!name) return;
  tab.name = name;
  el.tabEditDialog.close();
  saveAndRender();
}

function deleteActiveTabFromDialog() {
  const tab = activeTab();
  if (!tab) return;
  if (!confirm(`Poistetaanko välilehti "${tab.name}"? Korttien tiedot säilyvät varallisuussuunnitelmassa.`)) return;
  state.customTabs = state.customTabs.filter((item) => item.id !== tab.id);
  state.activeTabId = state.customTabs[0]?.id || null;
  el.tabEditDialog.close();
  saveAndRender();
}

function removeCard(cardId) {
  const tab = activeTab();
  if (!tab) return;
  tab.cards = tab.cards.filter((card) => card.id !== cardId);
  saveAndRender();
}

function activeTab() {
  return state.customTabs.find((tab) => tab.id === state.activeTabId) || state.customTabs[0];
}

function profileCardHtml() {
  const profile = activeProfile();
  if (!profile) return emptyStateHtml(t("addProfile"));
  return profileFieldsHtml(profile);
}

function profilePageHtml() {
  const profile = activeProfile();
  if (!profile) return emptyStateHtml(t("addProfile"));
  const user = SupabaseAuth.getUser();
  const avatarColor = profileAvatarColor(profile);
  const roleLabel = (r) => r === "admin"
    ? (state.language === "en" ? "Admin" : state.language === "ru" ? "Админ" : "Pääkäyttäjä")
    : (state.language === "en" ? "Viewer" : state.language === "ru" ? "Гость" : "Katselija");

  return `
    <div class="profile-page-grid">

      <!-- VASEN: identiteetti & tili -->
      <div class="profile-identity-card">
        <div class="profile-avatar-upload">
          <div class="profile-avatar-circle" style="--avatar-color:${avatarColor}" data-open-avatar-picker title="Vaihda väri">
            ${profile.avatarEmoji
              ? `<span class="avatar-emoji">${escapeHtml(profile.avatarEmoji)}</span>`
              : `<span class="avatar-initials">${profileInitials(profile)}</span>`}
          </div>
          <div class="avatar-picker-row" id="avatarPickerRow" hidden>
            ${["🏠","💰","📈","🌿","⚡","🎯","🦊","🐻","🧩","🚀"].map(e =>
              `<button class="avatar-emoji-btn" type="button" data-set-avatar-emoji="${e}">${e}</button>`
            ).join("")}
            <button class="avatar-emoji-btn avatar-reset-btn" type="button" data-set-avatar-emoji="">
              ${profileInitials(profile)}
            </button>
          </div>
        </div>
        <div class="profile-identity-info">
          <h2 class="profile-full-name">${escapeHtml(profileFullName(profile))}</h2>
          <p class="profile-email-display">${user ? escapeHtml(user.email) : "—"}</p>
          <span class="profile-auth-badge ${user ? "badge-active" : "badge-inactive"}">
            ${user
              ? (state.language === "en" ? "✓ Signed in" : state.language === "ru" ? "✓ Вошёл" : "✓ Kirjautunut")
              : (state.language === "en" ? "Not signed in" : state.language === "ru" ? "Не вошёл" : "Ei kirjautunut")}
          </span>
        </div>
        <button class="profile-signout-btn ghost-button danger-ghost" type="button" id="profileSignOutBtn">
          ${state.language === "en" ? "Sign out" : state.language === "ru" ? "Выйти" : "Kirjaudu ulos"}
        </button>
      </div>

      <!-- KESKI: henkilötiedot -->
      <div class="profile-fields-card">
        <h3 class="profile-section-title">
          ${state.language === "en" ? "Personal details" : state.language === "ru" ? "Личные данные" : "Henkilötiedot"}
        </h3>
        <form data-profile-form class="profile-form-inner">
          <div class="form-row">
            <label>${t("firstName")}<input name="firstName" type="text" value="${escapeHtml(profile.firstName || "")}" required /></label>
            <label>${t("lastName")}<input name="lastName" type="text" value="${escapeHtml(profile.lastName || "")}" /></label>
          </div>
          <label>${t("birthday")}<input name="birthday" type="date" value="${escapeHtml(profile.birthday || "")}" /></label>
          <div class="form-row">
            <label>${t("language")}
              <select name="language">
                ${Object.entries(languageOptions).map(([v, o]) => `<option value="${v}" ${profile.language === v ? "selected" : ""}>${o.label}</option>`).join("")}
              </select>
            </label>
            <label>${t("currency")}
              <select name="currency">
                ${Object.keys(currencyOptions).map((v) => `<option value="${v}" ${profile.currency === v ? "selected" : ""}>${v}</option>`).join("")}
              </select>
            </label>
          </div>
          <button class="primary-button" type="submit">${t("saveProfile")}</button>
        </form>
      </div>

      <!-- OIKEA: lapset -->
      <div class="profile-children-card">
        <h3 class="profile-section-title">${t("children")}</h3>
        <form data-child-form class="form-stack compact-form">
          <div class="form-row">
            <label>${t("childName")}<input name="name" type="text" required /></label>
            <label>${t("childBirthday")}<input name="birthday" type="date" /></label>
          </div>
          <button class="primary-button full-width-btn" type="submit">+ ${t("addChild")}</button>
        </form>
        <div class="profile-member-list">
          ${(profile.children || []).length
            ? (profile.children || []).map((child) => `
              <div class="profile-member-row">
                <div class="member-avatar member-avatar-child">
                  ${(child.name || "?")[0].toUpperCase()}
                </div>
                <div class="member-info">
                  <strong>${escapeHtml(child.name || "")}</strong>
                  <span class="muted">${child.birthday ? dateFormatForLanguage().format(new Date(child.birthday)) : "—"}</span>
                </div>
                <button class="delete-button" type="button" data-delete-child="${child.id}">×</button>
              </div>`).join("")
            : `<p class="muted profile-empty">${state.language === "en" ? "No children added yet." : "Ei lapsia lisätty."}</p>`}
        </div>
      </div>

      <!-- ALA-VASEN: perhejäsenet & roolit -->
      <div class="profile-family-card">
        <div class="profile-section-header">
          <h3 class="profile-section-title">${t("familyMembers")}</h3>
          <span class="profile-section-hint">
            ${state.language === "en"
              ? "Invited members can view or edit your data."
              : state.language === "ru"
              ? "Приглашённые могут просматривать или редактировать данные."
              : "Kutsutut jäsenet voivat katsella tai muokata tietojasi."}
          </span>
        </div>
        <form data-family-member-form class="family-invite-form">
          <div class="form-row">
            <label>${t("email")}<input name="email" type="email" placeholder="perhe@example.com" /></label>
            <label>${t("role")}
              <select name="role">
                <option value="viewer">${roleLabel("viewer")}</option>
                <option value="admin">${roleLabel("admin")}</option>
              </select>
            </label>
          </div>
          <label>${t("firstName")}<input name="name" type="text" required /></label>
          <button class="primary-button full-width-btn" type="submit">+ ${t("addFamilyMember")}</button>
        </form>
        <div class="profile-member-list">
          ${(profile.familyMembers || []).length
            ? (profile.familyMembers || []).map((member) => `
              <div class="profile-member-row">
                <div class="member-avatar member-avatar-family" style="background:${profileAvatarColor({firstName: member.name})}">
                  ${(member.name || "?")[0].toUpperCase()}
                </div>
                <div class="member-info">
                  <strong>${escapeHtml(member.name || "")}</strong>
                  <span class="member-role-badge role-${member.role || "viewer"}">${roleLabel(member.role || "viewer")}</span>
                  ${member.email ? `<span class="muted">${escapeHtml(member.email)}</span>` : ""}
                </div>
                <button class="delete-button" type="button" data-delete-family-member="${member.id}">×</button>
              </div>`).join("")
            : `<p class="muted profile-empty">${state.language === "en" ? "No family members yet." : "Ei perhejäseniä lisätty."}</p>`}
        </div>
      </div>

    </div>
  `;
}

function profileAvatarColor(profile) {
  const colors = ["#3b82f6","#10b981","#f59e0b","#ef4444","#8b5cf6","#06b6d4","#f97316","#ec4899"];
  const name = ((profile?.firstName || "") + (profile?.lastName || "")).trim() || "P";
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return colors[Math.abs(hash) % colors.length];
}

function profileFieldsHtml(profile) {
  const languageOptionsHtml = Object.entries(languageOptions).map(([value, option]) => `<option value="${value}" ${profile.language === value ? "selected" : ""}>${option.label}</option>`).join("");
  const currencyOptionsHtml = Object.keys(currencyOptions).map((value) => `<option value="${value}" ${profile.currency === value ? "selected" : ""}>${value}</option>`).join("");
  const children = Array.isArray(profile.children) ? profile.children : [];
  const members = Array.isArray(profile.familyMembers) ? profile.familyMembers : [];
  return `
    <div class="profile-card-grid">
      <form data-profile-form class="form-stack profile-form">
        <h2>${t("profile")}</h2>
        <div class="form-row">
          <label>${t("firstName")}<input name="firstName" type="text" value="${escapeHtml(profile.firstName || "")}" required /></label>
          <label>${t("lastName")}<input name="lastName" type="text" value="${escapeHtml(profile.lastName || "")}" /></label>
        </div>
        <label>${t("email")}<input name="email" type="email" value="${escapeHtml(profile.email || "")}" placeholder="nimi@example.com" /></label>
        <div class="form-row">
          <label>${t("birthday")}<input name="birthday" type="date" value="${escapeHtml(profile.birthday || "")}" /></label>
          <label>${t("language")}<select name="language">${languageOptionsHtml}</select></label>
          <label>${t("currency")}<select name="currency">${currencyOptionsHtml}</select></label>
        </div>
        <button class="primary-button" type="submit">${t("saveProfile")}</button>
      </form>
      <div class="children-panel">
        <h3>${t("children")}</h3>
        <form data-child-form class="form-stack compact-form">
          <label>${t("childName")}<input name="name" type="text" required /></label>
          <label>${t("childBirthday")}<input name="birthday" type="date" /></label>
          <button class="primary-button" type="submit">${t("addChild")}</button>
        </form>
        <div class="item-list">${children.length ? children.map((child) => `
          <article class="child-item">
            <div class="budget-top">
              <strong>${escapeHtml(child.name || "")}</strong>
              <button class="delete-button" type="button" data-delete-child="${child.id}">x</button>
            </div>
            <p class="muted">${child.birthday ? dateFormatForLanguage().format(new Date(child.birthday)) : ""}</p>
          </article>
        `).join("") : emptyStateHtml(t("children"))}</div>
      </div>
      <div class="family-panel">
        <h3>${t("familyMembers")}</h3>
        <form data-family-member-form class="form-stack compact-form">
          <label>${t("firstName")}<input name="name" type="text" required /></label>
          <label>${t("email")}<input name="email" type="email" placeholder="member@example.com" /></label>
          <label>${t("role")}<input name="role" type="text" placeholder="Puoliso, vanhempi..." /></label>
          <button class="primary-button" type="submit">${t("addFamilyMember")}</button>
        </form>
        <div class="item-list">${members.length ? members.map((member) => `
          <article class="family-member-item">
            <div class="budget-top">
              <strong>${escapeHtml(member.name || "")}</strong>
              <button class="delete-button" type="button" data-delete-family-member="${member.id}">x</button>
            </div>
            <p class="muted">${escapeHtml(member.role || "")}${member.email ? ` · ${escapeHtml(member.email)}` : ""}</p>
          </article>
        `).join("") : emptyStateHtml(t("familyMembers"))}</div>
      </div>
    </div>
  `;
}

function propertiesHtml() {
  if (!state.properties.length) return emptyStateHtml("Lisää omat kodit, vuokrakohteet ja muut kiinteistöt.");
  return state.properties.map((property) => {
    const linkedDebt = state.debts.find((debt) => debt.id === property.debtId);
    const loanPayment = linkedDebt ? Number(linkedDebt.monthlyPayment || 0) : Number(property.monthlyPayment || 0);
    const loanBalance = linkedDebt ? Number(linkedDebt.principal || 0) : Number(property.loanPrincipal || 0);
    const cashflow = propertyCashflow(property, loanPayment);
    const netRent = propertyNetRent(property);
    const yieldPercent = propertyYield(property, netRent);
    const monthlyCosts = propertyMonthlyCostTotal(property);
    const allCosts = propertyCostTotal(property);
    return `
      <article class="property-item property-summary-card" role="button" tabindex="0" data-open-property-detail="${property.id}">
        <div class="property-top">
          <div>
            <strong>${escapeHtml(property.address)}</strong>
            <p class="muted">${property.place ? escapeHtml(property.place) : "Kiinteistö"}</p>
          </div>
          <div class="row-actions">
            <button class="delete-button" type="button" data-delete-property="${property.id}">x</button>
          </div>
        </div>
        <div class="property-value-row">
          <span class="pill">${propertyTypeLabel(property.type)}</span>
          <strong>${currency.format(property.value)}</strong>
        </div>
        <div class="property-card-facts">
          <span>Laina <strong>${currency.format(loanBalance)}</strong></span>
          <span>Vuokra <strong>${currency.format(property.monthlyRent)} / kk</strong></span>
          <span>Vastike <strong>${currency.format(property.monthlyFee)} / kk</strong></span>
          <span>Erä <strong>${currency.format(loanPayment)} / kk</strong></span>
        </div>
        <div class="property-card-facts muted-facts">
          <span>Lisäkulut <strong>${currency.format(monthlyCosts)} / kk</strong></span>
          <span>Kulut yhteensä <strong>${currency.format(allCosts)}</strong></span>
        </div>
        <div class="card-highlight ${cashflow >= 0 ? "positive-card-line" : "warning-card-line"}">
          <span>Kassavirta</span>
          <strong>${currency.format(cashflow)} / kk</strong>
        </div>
        <p class="muted">Nettovuokratuotto ${currency.format(netRent)} / kk · ${formatPercent(yieldPercent)} vuodessa nykyarvosta</p>
      </article>
    `;
  }).join("");
}

function debtsHtml() {
  if (!state.debts.length) return emptyStateHtml("Lisää lainat ja muut velat.");
  return state.debts.map((debt) => {
    const forecast = forecastDebt(debt);
    const originalMonths = validIsoDate(debt.drawdownDate) && validIsoDate(debt.originalPayoffDate) ? monthsBetween(new Date(debt.drawdownDate), new Date(debt.originalPayoffDate)) : 0;
    const totalLoanInterest = estimateLoanTotalInterest(Number(debt.originalPrincipal || debt.principal || 0), Number(debt.annualRate || 0), Number(debt.originalMonthlyPayment || debt.monthlyPayment || 0), originalMonths, debt.loanType || "annuity");
    return `
      <article class="debt-item clickable-debt-item" data-open-debt-detail="${debt.id}" tabindex="0">
        <div class="debt-top"><strong>${escapeHtml(debt.name)}</strong><button class="delete-button" type="button" data-delete-debt="${debt.id}">x</button></div>
        <div class="card-value-row debt-value-row">
          <span class="pill">${loanTypeLabel(debt.loanType)}</span>
          <strong>${currency.format(debt.principal)}</strong>
        </div>
        <div class="card-facts"><span>Korko <strong>${Number(debt.annualRate).toFixed(2)} %</strong></span><span>Erä <strong>${currency.format(debt.monthlyPayment)} / kk</strong></span></div>
        ${debt.originalPayoffDate ? `<p class="muted">Alkuperäinen viimeinen erä ${dateFormatForLanguage().format(new Date(debt.originalPayoffDate))} · alkuperäinen erä ${currency.format(debt.originalMonthlyPayment || debt.monthlyPayment)} / kk</p>` : ""}
        ${originalMonths ? `<p class="muted">Korkoja koko laina-ajalta arviolta ${currency.format(totalLoanInterest)}</p>` : ""}
        <div class="card-highlight ${forecast.payoffDate ? "neutral-card-line" : "warning-card-line"}">
          <span>${forecast.payoffDate ? `Maksettu ${forecast.payoffDate} (${forecast.months} kk)` : "Kuukausierä ei kata korkoa"}</span>
          <strong>${forecast.payoffDate ? currency.format(forecast.totalInterest) : "Tarkista erä"}</strong>
        </div>
        ${debt.notes ? `<p class="muted">${escapeHtml(debt.notes)}</p>` : ""}
      </article>
    `;
  }).join("");
}

function carsHtml() {
  if (!state.cars.length) return emptyStateHtml("Lisää perheen autot ja niihin liittyvät lainat.");
  return state.cars.map((car) => {
    const linkedDebt = state.debts.find((debt) => debt.id === car.debtId);
    const linkedExpense = state.expenseTypes.find((item) => item.id === car.expenseId);
    const loanBalance = linkedDebt ? Number(linkedDebt.principal || 0) : Number(car.loanPrincipal || 0);
    const monthlyPayment = linkedExpense ? Number(linkedExpense.amount || 0) : Number(car.monthlyPayment || 0);
    const maintenanceCosts = Array.isArray(car.maintenanceCosts) ? car.maintenanceCosts : [];
    const maintenanceTotal = maintenanceCosts.reduce((sum, cost) => sum + Number(cost.amount || 0), 0);
    return `
      <article class="car-item car-summary-card" role="button" tabindex="0" data-open-car-detail="${car.id}">
        <div class="asset-top">
          <div>
            <strong>${escapeHtml(car.brand)} ${escapeHtml(car.model)}</strong>
            <p class="muted">${escapeHtml(car.plate)} · ${Number(car.year || 0) || "-"} · hankittu ${Number(car.purchaseYear || 0) || "-"}</p>
          </div>
          <button class="delete-button" type="button" data-delete-car="${car.id}">x</button>
        </div>
        <div class="card-value-row car-value-row">
          <span class="pill">Auto</span>
          <strong>${currency.format(car.currentValue)}</strong>
        </div>
        <div class="card-facts"><span>Hankinta <strong>${currency.format(car.purchasePrice)}</strong></span><span>Laina <strong>${currency.format(loanBalance)}</strong></span><span>Korko <strong>${Number(car.annualRate || 0).toFixed(2)} %</strong></span></div>
        <div class="card-highlight ${monthlyPayment > 0 ? "warning-card-line" : "neutral-card-line"}">
          <span>Budjetin kulu</span>
          <strong>${currency.format(monthlyPayment)} / kk</strong>
        </div>
        <div class="car-summary-line card-facts">
          <span>Ylläpito yhteensä</span>
          <strong>${currency.format(maintenanceTotal)}</strong>
        </div>
      </article>
    `;
  }).join("");
}

function carCostTypeOptionsHtml(selected = "repair") {
  return ["insurance", "repair", "tax", "tires"].map((value) => `<option value="${value}" ${selected === value ? "selected" : ""}>${carCostTypeLabel(value)}</option>`).join("");
}

function carCostTypeLabel(type) {
  const labels = {
    insurance: "Vakuutus",
    repair: "Remontti",
    tax: "Vero",
    tires: "Renkaat",
  };
  return labels[type] || "Remontti";
}

function assetsHtml() {
  if (!state.assets.length) return emptyStateHtml("Lisää kiinteistöt, tilit, säästöt ja muut varat.");
  return state.assets.map((asset) => {
    const goal = assetGoalStatus(asset);
    return `
      <article class="asset-item clickable-asset-item" role="button" tabindex="0" data-open-asset-detail="${asset.id}">
        <div class="asset-top">
          <div>
            <span class="asset-name-field"><strong>${escapeHtml(asset.name)}</strong></span>
            <p class="muted">${asset.place ? escapeHtml(asset.place) : "Paikkaa ei ole asetettu"}</p>
          </div>
          <div class="row-actions">
            <button class="delete-button" type="button" data-delete-asset="${asset.id}">x</button>
          </div>
        </div>
        <div class="asset-value-row">
          <span class="pill">${assetTypeLabel(asset.type)}</span>
          <strong>${currency.format(asset.value)}</strong>
        </div>
        ${goal.hasGoal ? `
          <div class="asset-goal-block">
            <div class="budget-top"><strong>${escapeHtml(goal.name)}</strong><span>${formatPercent(goal.percent)}</span></div>
            <div class="progress"><span style="width:${goal.percent}%"></span></div>
            <p class="${goal.missing > 0 ? "muted" : "positive"}">${goal.missing > 0 ? `Puuttuu ${currency.format(goal.missing)}` : "Tavoite saavutettu"}</p>
          </div>
        ` : `<p class="muted">Ei tavoitetta. Lisää tavoite dialogissa, jos tälle omaisuuserälle on suunnitelma.</p>`}
      </article>
    `;
  }).join("");
}

function assetsOverviewHtml() {
  const total = state.assets.reduce((sum, asset) => sum + Number(asset.value || 0), 0);
  const goals = assetGoalItems();
  const goalTarget = goals.reduce((sum, goal) => sum + Number(goal.target || 0), 0);
  const goalSaved = goals.reduce((sum, goal) => sum + Number(goal.saved || 0), 0);
  const missing = Math.max(0, goalTarget - goalSaved);
  const percent = goalTarget > 0 ? Math.min(100, (goalSaved * 100) / goalTarget) : 0;
  return `
    <div class="asset-overview-grid">
      <article class="asset-overview-tile"><span>Varat yhteensä</span><strong>${currency.format(total)}</strong></article>
      <article class="asset-overview-tile"><span>Tavoitteissa</span><strong>${currency.format(goalSaved)}</strong><em>${formatPercent(percent)}</em></article>
      <article class="asset-overview-tile"><span>Tavoitteisiin puuttuu</span><strong>${currency.format(missing)}</strong></article>
    </div>
  `;
}

function assetGoalStatus(asset) {
  const target = Number(asset.goalAmount || 0);
  const saved = Number(asset.value || 0);
  const percent = target > 0 ? Math.min(100, (saved * 100) / target) : 0;
  return {
    hasGoal: target > 0,
    name: asset.goalName || `${asset.name} tavoite`,
    target,
    saved,
    percent,
    missing: Math.max(0, target - saved),
  };
}

function startInlineAssetEdit(node) {
  if (node.querySelector("input, select")) return;
  const [assetId, field] = node.dataset.editInlineAsset.split(":");
  const asset = state.assets.find((item) => item.id === assetId);
  if (!asset) return;

  let editor;
  if (field === "type") {
    editor = document.createElement("select");
    editor.className = "inline-item-input";
    [
      ["savings", "Säästö"],
      ["property", "Kiinteistö"],
      ["vehicle", "Ajoneuvo"],
      ["cash", "Talletus"],
      ["other", "Muu"],
    ].forEach(([value, label]) => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = label;
      editor.append(option);
    });
    editor.value = asset.type || "other";
  } else {
    editor = document.createElement("input");
    editor.className = "inline-item-input";
    editor.type = field === "value" ? "number" : "text";
    editor.step = field === "value" ? "0.01" : "";
    editor.min = field === "value" ? "0" : "";
    editor.value = field === "value" ? Number(asset.value || 0) : asset.name;
  }

  node.textContent = "";
  node.append(editor);
  editor.focus();
  if (editor.select) editor.select();

  let cancelled = false;
  const save = () => {
    if (cancelled) return;
    if (field === "name") {
      const value = editor.value.trim();
      if (value) asset.name = value;
    }
    if (field === "value") asset.value = Number(editor.value || 0);
    if (field === "type") asset.type = editor.value;
    syncLinkedPropertyFromAsset(asset);
    saveAndRender();
  };

  editor.addEventListener("blur", save, { once: true });
  editor.addEventListener("keydown", (event) => {
    if (event.key === "Enter") editor.blur();
    if (event.key === "Escape") {
      cancelled = true;
      render();
    }
  });
}

function startInlineInvestmentEdit(node) {
  if (node.querySelector("input")) return;
  const [investmentId, field] = node.dataset.editInlineInvestment.split(":");
  const investment = state.investments.find((item) => item.id === investmentId);
  if (!investment) return;
  const editor = document.createElement("input");
  editor.className = "inline-item-input";
  editor.type = "text";
  editor.value = field === "goalName"
    ? (investment.goalName || `${investment.name} tavoite`)
    : field === "place"
      ? (investment.place || "")
      : investment.name;

  node.textContent = "";
  node.append(editor);
  editor.focus();
  editor.select();

  let cancelled = false;
  const save = () => {
    if (cancelled) return;
    const value = editor.value.trim();
    if (field === "name" && value) {
      investment.name = value;
      updateFinancialEventTargetNames("investment", investment.id, investment.name);
    }
    if (field === "place") investment.place = value;
    if (field === "goalName") investment.goalName = value;
    saveAndRender();
  };

  editor.addEventListener("blur", save, { once: true });
  editor.addEventListener("keydown", (event) => {
    if (event.key === "Enter") editor.blur();
    if (event.key === "Escape") {
      cancelled = true;
      render();
    }
  });
}

function investmentsHtml() {
  if (!state.investments.length) return emptyStateHtml("Lisää ensimmäinen sijoitus tai kuukausisijoitussuunnitelma.");
  return state.investments.map((investment) => {
    const target = investmentTargetProjection(investment);
    const eventCount = financialEventsForTarget("investment", investment.id).length;
    const estimatedGain = target.value - Number(investment.value || 0);
    const goalAmount = Number(investment.goalAmount || 0);
    const goalName = investment.goalName || `${investment.name} tavoite`;
    const goalPercent = goalAmount > 0 ? Math.min(100, (Number(investment.value || 0) * 100) / goalAmount) : 0;
    const goalPlan = investmentGoalPlan(investment);
    const place = investment.place || "Sijoitus";
    return `
      <article class="debt-item clickable-debt-item investment-summary-card" role="button" tabindex="0" data-open-investment-detail="${investment.id}">
        <div class="debt-top"><strong class="investment-card-title inline-edit-field" role="button" tabindex="0" title="Klikkaa muokataksesi" data-edit-inline-investment="${investment.id}:name">${escapeHtml(investment.name)}</strong><button class="delete-button" type="button" data-delete-investment="${investment.id}">x</button></div>
        <div class="investment-card-main">
          <span class="inline-edit-field" role="button" tabindex="0" title="Klikkaa muokataksesi" data-edit-inline-investment="${investment.id}:place">${escapeHtml(place)}</span>
          <strong>${currency.format(investment.value)}</strong>
        </div>
        <p class="investment-goal-name inline-edit-field" role="button" tabindex="0" title="Klikkaa muokataksesi" data-edit-inline-investment="${investment.id}:goalName">${escapeHtml(goalName)}</p>
        <div class="debt-meta investment-card-meta">
          <span class="pill">${investmentTypeLabel(investment.type)}</span>
          <span>Kuukausisijoitus ${currency.format(investment.monthlyContribution)} / kk</span>
          <span>Arvio ${target.label}: ${currency.format(target.value)}</span>
          <span>Tuotto-odotus ${formatPercent(Number(investment.expectedReturn || 0))}</span>
        </div>
        ${goalAmount > 0 ? `<p class="muted">Tavoite: ${escapeHtml(goalName)} · ${currency.format(investment.value)} / ${currency.format(goalAmount)} (${formatPercent(goalPercent)})</p>` : ""}
        ${goalAmount > 0 ? `<p class="${goalPlan.probability >= 90 ? "positive" : "warning"}">Onnistumisennuste ${formatPercent(goalPlan.probability)} · suositeltu kk-erä ${currency.format(goalPlan.recommendedMonthly)}</p>` : ""}
        ${goalAmount > 0 ? `<p class="muted">${escapeHtml(investmentGoalAdvice(investment, goalPlan))}</p>` : ""}
        <p class="${estimatedGain >= 0 ? "positive" : "warning"}">Arvioitu tuotto ${estimatedGain >= 0 ? "+" : "-"}${currency.format(Math.abs(estimatedGain))}</p>
        <p class="muted">${eventCount ? `${eventCount} tapahtumaa lokissa` : "Ei vielä tapahtumia"}</p>
      </article>
    `;
  }).join("");
}

function goalsHtml() {
  const goals = goalSourceItems();
  if (!goals.length) return emptyStateHtml("Lisää tavoite varallisuuserälle tai sijoitukselle.");
  return goals.map((goal) => {
    const percent = goal.target ? Math.min((goal.saved / goal.target) * 100, 100) : 0;
    return `
      <article class="goal-item clickable-goal-item" role="button" tabindex="0" data-open-goal-detail="${goal.source}:${goal.sourceId}">
        <div class="goal-top"><strong>${escapeHtml(goal.name)}</strong><span class="pill">${escapeHtml(goal.sourceLabel)}</span></div>
        <p class="muted">${goal.place ? `${escapeHtml(goal.place)} · ` : ""}${currency.format(goal.saved)} / ${currency.format(goal.target)}</p>
        <div class="progress"><span style="width:${percent}%"></span></div>
      </article>
    `;
  }).join("");
}

function goalSourceItems() {
  return [...assetGoalItems(), ...investmentGoalItems()];
}

function assetGoalItems() {
  return state.assets
    .filter((asset) => Number(asset.goalAmount || 0) > 0)
    .map((asset) => ({
      id: `asset-goal-${asset.id}`,
      sourceId: asset.id,
      name: asset.goalName || `${asset.name} tavoite`,
      target: Number(asset.goalAmount || 0),
      saved: Number(asset.value || 0),
      place: asset.place || asset.name,
      source: "asset",
      sourceLabel: assetTypeLabel(asset.type),
    }));
}

function investmentGoalItems() {
  return state.investments
    .filter((investment) => Number(investment.goalAmount || 0) > 0)
    .map((investment) => ({
      id: `investment-goal-${investment.id}`,
      sourceId: investment.id,
      name: investment.goalName || `${investment.name} tavoite`,
      target: Number(investment.goalAmount || 0),
      saved: Number(investment.value || 0),
      place: investment.place || investment.name,
      source: "investment",
      sourceLabel: "Sijoitus",
    }));
}

function tipsHtml() {
  if (!state.tips.length) return emptyStateHtml("Lisää vinkkejä, joita haluatte seurata.");
  return state.tips.map((tip) => `
    <article class="tip-item ${tip.done ? "done" : ""}">
      <div class="asset-top">
        <label class="check-row"><input type="checkbox" ${tip.done ? "checked" : ""} data-toggle-tip="${tip.id}" /> ${escapeHtml(tip.title)}</label>
        <button class="delete-button" type="button" data-delete-tip="${tip.id}">x</button>
      </div>
      <p class="muted">${tip.impact ? `Arvioitu vaikutus ${currency.format(tip.impact)} / kk` : "Vaikutusta ei vielä arvioitu"}</p>
      <p>${escapeHtml(tip.note || "")}</p>
    </article>
  `).join("");
}

function budgetPlanHtml() {
  const rentalCashflow = rentalCashflowTotal();
  const income = sum(state.incomeTypes) + rentalCashflow;
  const expense = sum(state.expenseTypes) + investmentMonthlyExpenseTotal();
  const balance = income - expense;
  return `
    <div class="summary-grid compact-summary">
      <article class="metric income"><span>${t("incomeMonthly")}</span><strong>${currency.format(income)}</strong></article>
      <article class="metric expense"><span>${t("expenseMonthly")}</span><strong>${currency.format(expense)}</strong></article>
      <article class="metric balance ${balance >= 0 ? "positive-card" : "negative-card"}"><span>${balance >= 0 ? t("familyPositive") : t("familyNegative")}</span><strong>${currency.format(balance)}</strong></article>
    </div>
    <div class="budget-planner-grid">
      <div>
        <h3>${t("income")}</h3>
        ${budgetTypeFormHtml("income")}
        <div class="item-list">${budgetTypeListHtml("income")}</div>
        <article class="budget-item generated-item">
          <div class="budget-top">
            <strong>Vuokrakassavirta sijoituskiinteistöistä</strong>
            <strong>${currency.format(rentalCashflow)}</strong>
          </div>
          <p class="muted">Lasketaan kiinteistökortilta: vuokra - vastike - lainan kk-erä.</p>
        </article>
      </div>
      <div>
        <h3>${t("expenses")}</h3>
        ${budgetTypeFormHtml("expense")}
        <div class="item-list">${budgetTypeListHtml("expense")}</div>
      </div>
    </div>
  `;
}

function eventLogHtml() {
  return `
    <button class="primary-button event-cta-button" type="button" data-open-financial-event>Kirjaa tapahtuma</button>
    <div class="event-log-preview" data-open-event-log tabindex="0">
      <div class="with-action">
        <strong>Viimeisimmät tapahtumat</strong>
        <span class="muted">Avaa kaikki</span>
      </div>
      <div class="item-list spaced-list">${financialEventsHtml(3, { showDelete: false })}</div>
    </div>
  `;
}

function openGoalDetailDialog(payload) {
  const [source, sourceId] = String(payload || "").split(":");
  const item = source === "investment"
    ? state.investments.find((investment) => investment.id === sourceId)
    : state.assets.find((asset) => asset.id === sourceId);
  if (!item) return;
  const goalName = item.goalName || `${item.name} tavoite`;
  const goalAmount = Number(item.goalAmount || 0);
  const saved = Number(item.value || 0);
  const percent = goalAmount > 0 ? Math.min(100, (saved * 100) / goalAmount) : 0;
  el.goalDetailTitle.textContent = goalName;
  el.goalDetailMeta.textContent = `${source === "investment" ? "Sijoitus" : assetTypeLabel(item.type)}${item.place ? ` · ${item.place}` : ""}`;
  el.goalDetailChart.innerHTML = source === "investment" ? investmentProgressSvg(item) : assetGoalProgressSvg(item);
  el.goalDetailSummary.innerHTML = `
    <article class="budget-item">
      <div class="budget-top"><strong>Nykytilanne</strong><strong>${currency.format(saved)}</strong></div>
      <p class="muted">Tavoite ${currency.format(goalAmount)} · ${formatPercent(percent)} saavutettu</p>
      <div class="progress"><span style="width:${percent}%"></span></div>
    </article>
    <article class="budget-item">
      <div class="budget-top"><strong>Puuttuu</strong><strong>${currency.format(Math.max(0, goalAmount - saved))}</strong></div>
      <p class="muted">${source === "investment" ? "Sijoituksen arvio näkyy kaaviossa." : "Päivitä arvoa Varat-kortilta, kun säästö kasvaa."}</p>
    </article>
  `;
  el.goalDetailDialog.showModal();
}

function assetGoalProgressSvg(asset) {
  const width = 860;
  const height = 260;
  const pad = 76;
  const saved = Number(asset.value || 0);
  const goal = Math.max(Number(asset.goalAmount || 0), saved, 1);
  const y = height - pad - (saved / goal) * (height - pad * 2);
  const goalY = height - pad - (Number(asset.goalAmount || 0) / goal) * (height - pad * 2);
  const xStart = pad;
  const xEnd = width - pad;
  return `
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Tavoitteen etenemä">
      ${debtAxisSvg({ width, height, pad, max: goal, min: 0 })}
      <line x1="${xStart}" y1="${goalY}" x2="${xEnd}" y2="${goalY}" stroke="#3B82F6" stroke-width="3" stroke-dasharray="4 8" stroke-linecap="round"></line>
      <text x="${xEnd}" y="${Math.max(16, goalY - 8)}" class="chart-label" text-anchor="end">Tavoite ${currency.format(Number(asset.goalAmount || 0))}</text>
      <polyline points="${xStart},${height - pad} ${xEnd},${y}" fill="none" stroke="#10B981" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></polyline>
      <circle cx="${xEnd}" cy="${y}" r="7" fill="#10B981" stroke="#ffffff" stroke-width="3"></circle>
      <text x="${xEnd}" y="24" class="chart-value" text-anchor="end">${currency.format(saved)}</text>
    </svg>
  `;
}

function openEventLogDialog() {
  renderEventLogDialog();
  el.eventLogDialog.showModal();
}

function renderEventLogDialog() {
  el.eventLogDialogList.innerHTML = financialEventsHtml(Infinity, { showDelete: true });
  el.restoreDeletedEventBtn.disabled = !(state.deletedFinancialEvents || []).length;
}

function openFinancialEventDialog(eventId = "", preset = {}) {
  const item = eventId ? state.financialEvents.find((entry) => entry.id === eventId) : null;
  if (el.eventLogDialog.open) el.eventLogDialog.close();
  if (el.debtDialog.open) el.debtDialog.close();
  editingFinancialEventId = item ? item.id : "";
  el.financialEventForm.reset();
  el.financialEventDialogTitle.textContent = item ? "Muokkaa tapahtumaa" : "Kirjaa tapahtuma";
  el.deleteFinancialEventBtn.hidden = !item;
  el.financialEventDate.value = localIsoDate();
  el.financialEventKind.value = item?.targetType && ["debt", "property", "investment"].includes(item.targetType) ? item.targetType : preset.kind || "debt";
  el.financialEventMode.value = "change";
  el.financialEventDirection.value = preset.direction || "minus";
  populateFinancialEventTargets();
  if (item) {
    el.financialEventTarget.value = item.targetId;
    el.financialEventMode.value = "set";
    el.financialEventDirection.value = Number(item.delta || 0) < 0 ? "minus" : "plus";
    el.financialEventAmount.value = Number.isFinite(Number(item.newValue)) ? Number(item.newValue) : Number(item.amount || 0);
    el.financialEventDate.value = item.date || localIsoDate();
    el.financialEventNote.value = item.note || "";
    updateFinancialEventPreview();
  } else if (preset.targetId) {
    el.financialEventTarget.value = preset.targetId;
    el.financialEventMode.value = preset.mode || "change";
    el.financialEventDirection.value = preset.direction || (preset.kind === "debt" ? "minus" : "plus");
    if (preset.note) el.financialEventNote.value = preset.note;
    updateFinancialEventPreview();
  }
  el.financialEventDialog.showModal();
}

function populateFinancialEventTargets() {
  const kind = el.financialEventKind.value;
  const options = financialEventDialogTargets(kind);
  el.financialEventTarget.innerHTML = options.length
    ? options.map((item) => `<option value="${item.id}">${escapeHtml(item.label)}</option>`).join("")
    : `<option value="">Ei kohteita</option>`;
  el.financialEventDirection.value = kind === "debt" ? "minus" : "plus";
  updateFinancialEventPreview();
}

function financialEventDialogTargets(kind) {
  if (kind === "debt") return state.debts.map((debt) => ({ id: debt.id, label: debt.name }));
  if (kind === "property") return state.properties.map((property) => ({ id: property.id, label: property.address }));
  if (kind === "investment") return state.investments.map((investment) => ({ id: investment.id, label: investment.name }));
  return [];
}

function currentFinancialEventTarget() {
  const kind = el.financialEventKind.value;
  const id = el.financialEventTarget.value;
  if (kind === "debt") return state.debts.find((item) => item.id === id);
  if (kind === "property") return state.properties.find((item) => item.id === id);
  if (kind === "investment") return state.investments.find((item) => item.id === id);
  return null;
}

function financialEventTargetValue(kind, target) {
  if (!target) return 0;
  if (kind === "debt") return Number(target.principal || 0);
  if (kind === "property") return Number(target.value || 0);
  if (kind === "investment") return Number(target.value || 0);
  return 0;
}

function updateFinancialEventPreview() {
  const kind = el.financialEventKind.value;
  const target = currentFinancialEventTarget();
  const previous = financialEventTargetValue(kind, target);
  const amount = Number(el.financialEventAmount.value || 0);
  const mode = el.financialEventMode.value;
  const direction = el.financialEventDirection.value;
  el.financialEventCurrent.textContent = `Nykyinen arvo ${currency.format(previous)}`;
  el.financialEventAmountLabel.firstChild.textContent = mode === "set" ? "Uusi arvo " : "Summa ";
  el.financialEventDirection.disabled = mode === "set";
  const next = mode === "set"
    ? amount
    : direction === "minus"
      ? Math.max(0, previous - amount)
      : previous + amount;
  const delta = next - previous;
  el.financialEventResult.textContent = `Muutos ${delta >= 0 ? "+" : "-"}${currency.format(Math.abs(delta))} · uusi arvo ${currency.format(next)}`;
}

function investmentCalculatorHtml() {
  const settings = state.investmentCalculator;
  const result = calculateInvestment(settings);
  return `
    <div class="calculator-grid">
      <div class="form-stack">
        <label>Kertasijoitus alussa
          <input data-investment-calculator name="initial" type="number" min="0" step="100" value="${settings.initial}" />
        </label>
        <label>Kuukausisäästösumma
          <input data-investment-calculator name="monthly" type="number" min="0" step="10" value="${settings.monthly}" />
        </label>
        <label>Vuotuinen tuotto-odotus %
          <input data-investment-calculator name="annualReturn" type="number" min="-50" step="0.1" value="${settings.annualReturn}" />
        </label>
        <label>Sijoitusaika vuosina
          <input data-investment-calculator name="years" type="number" min="1" max="80" step="1" value="${settings.years}" />
        </label>
      </div>
      <div class="calculator-result">
        <span>Arvioitu loppusumma</span>
        <strong>${currency.format(result.finalValue)}</strong>
        <div class="result-split">
          <p><span>Talletukset</span><strong>${currency.format(result.deposits)}</strong></p>
          <p><span>Arvioitu tuotto</span><strong>${currency.format(result.gain)}</strong></p>
        </div>
      </div>
      <div class="wealth-chart calculator-chart">${investmentProjectionSvg(settings)}</div>
    </div>
  `;
}

function calculateInvestment(settings) {
  const initial = Number(settings.initial || 0);
  const monthly = Number(settings.monthly || 0);
  const months = Math.max(0, Number(settings.years || 0) * 12);
  const monthlyRate = Number(settings.annualReturn || 0) / 100 / 12;
  let value = initial;

  for (let month = 1; month <= months; month += 1) {
    value = value * (1 + monthlyRate) + monthly;
  }

  const deposits = initial + monthly * months;
  return {
    finalValue: value,
    deposits,
    gain: value - deposits,
  };
}

function investmentProjectionSvg(settings) {
  const points = [];
  const initial = Number(settings.initial || 0);
  const monthly = Number(settings.monthly || 0);
  const years = Math.max(1, Number(settings.years || 1));
  const monthlyRate = Number(settings.annualReturn || 0) / 100 / 12;
  const startDate = new Date();
  let value = initial;

  points.push({ year: 0, month: 0, value, deposits: initial, gain: 0, date: startDate });
  for (let month = 1; month <= years * 12; month += 1) {
    value = value * (1 + monthlyRate) + monthly;
    if (month % 12 === 0) {
      const deposits = initial + monthly * month;
      points.push({
        year: month / 12,
        month,
        value,
        deposits,
        gain: value - deposits,
        date: addYears(startDate, month / 12),
      });
    }
  }

  const width = 760;
  const height = 300;
  const pad = 82;
  const max = Math.max(...points.map((point) => point.value), 1);
  const chartPoints = points.map((point) => {
    const x = pad + (point.year / years) * (width - pad * 2);
    const y = height - pad - (point.value / max) * (height - pad * 2);
    return { ...point, x, y };
  });
  const line = chartPoints.map((point) => `${point.x},${point.y}`).join(" ");
  const last = points[points.length - 1];

  return `
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Sijoituslaskurin kehitys">
      ${investmentAxisSvg(chartPoints, { width, height, pad, max, years })}
      <polyline points="${line}" fill="none" stroke="#10B981" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></polyline>
      ${chartPoints.map((point) => investmentCheckpointSvg(point, width)).join("")}
      <text x="${width - pad}" y="22" class="chart-value" text-anchor="end">${currency.format(last.value)}</text>
    </svg>
  `;
}

function investmentAxisSvg(points, settings) {
  const { width, height, pad, max, years } = settings;
  const plotHeight = height - pad * 2;
  const yTicks = [0, 0.25, 0.5, 0.75, 1].map((ratio) => {
    const value = max * ratio;
    const y = height - pad - ratio * plotHeight;
    return `
      <line class="axis-grid" x1="${pad}" y1="${y}" x2="${width - pad}" y2="${y}"></line>
      <text x="${pad - 8}" y="${y + 4}" class="chart-label" text-anchor="end">${formatAxisCurrency(value)}</text>
    `;
  }).join("");
  const xStep = Math.max(1, Math.ceil(years / 6));
  const xTicks = points.filter((point) => point.year % xStep === 0 || point.year === years).map((point) => `
    <line class="axis-tick" x1="${point.x}" y1="${height - pad}" x2="${point.x}" y2="${height - pad + 6}"></line>
    <text x="${point.x}" y="${height - 18}" class="chart-label" text-anchor="middle">${point.year} v</text>
  `).join("");

  return `
    <g class="chart-axis">
      ${yTicks}
      <line class="axis-line" x1="${pad}" y1="${height - pad}" x2="${width - pad}" y2="${height - pad}"></line>
      <line class="axis-line" x1="${pad}" y1="${pad}" x2="${pad}" y2="${height - pad}"></line>
      ${xTicks}
      <text x="${width - pad}" y="${height - 2}" class="chart-label" text-anchor="end">X: vuodet</text>
      <text x="${pad + 8}" y="${pad - 18}" class="chart-label">Y: eurot</text>
    </g>
  `;
}

function formatAxisCurrency(value) {
  const selected = currencyOptions[state.currency] ? state.currency : "EUR";
  const suffix = currencyOptions[selected].label;
  if (Math.abs(value) >= 1000000) return `${(value / 1000000).toFixed(1).replace(".", ",")}M ${suffix}`;
  if (Math.abs(value) >= 1000) return `${Math.round(value / 1000)}k ${suffix}`;
  return currency.format(value);
}

function formatCurrency(value) {
  const selected = currencyOptions[state.currency] ? state.currency : "EUR";
  const option = currencyOptions[selected];
  if (!option.intlCode) {
    return `${new Intl.NumberFormat("fi-FI", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(Number(value || 0))} ${option.label}`;
  }
  return new Intl.NumberFormat(languageOptions[state.language]?.locale || "fi-FI", { style: "currency", currency: option.intlCode }).format(Number(value || 0));
}

function investmentCheckpointSvg(point, width) {
  const tooltipWidth = 205;
  const tooltipHeight = 76;
  const tooltipX = point.x > width - tooltipWidth - 24 ? point.x - tooltipWidth - 12 : point.x + 12;
  const tooltipY = point.y < tooltipHeight + 20 ? point.y + 14 : point.y - tooltipHeight - 10;
  const date = dateFormat.format(point.date);
  const title = `${date}\nSijoitettu: ${currency.format(point.deposits)}\nTuotto: ${currency.format(point.gain)}\nYhteensä: ${currency.format(point.value)}`;

  return `
    <g class="projection-marker" tabindex="0" aria-label="${escapeHtml(title)}">
      <circle cx="${point.x}" cy="${point.y}" r="6" fill="#3B82F6" stroke="#ffffff" stroke-width="3"></circle>
      <title>${escapeHtml(title)}</title>
      <g class="projection-tooltip" transform="translate(${tooltipX} ${tooltipY})">
        <rect width="${tooltipWidth}" height="${tooltipHeight}" rx="8"></rect>
        <text x="10" y="18">${escapeHtml(date)}${point.year ? ` (+${point.year}v)` : ""}</text>
        <text x="10" y="35">Sijoitettu: ${currency.format(point.deposits)}</text>
        <text x="10" y="52">Tuotto: ${currency.format(point.gain)}</text>
        <text x="10" y="69">Yhteensä: ${currency.format(point.value)}</text>
      </g>
    </g>
  `;
}

function addYears(date, years) {
  const result = new Date(date);
  result.setFullYear(result.getFullYear() + years);
  return result;
}

function updateCalculatorSetting(name, value) {
  state.investmentCalculator[name] = Number(value || 0);
  saveAndRender();
}

function budgetTypeFormHtml(type) {
  const label = type === "income" ? "Uusi tulotyyppi" : "Uusi kulutyyppi";
  return `
    <form data-budget-type-form="${type}" class="form-stack compact-form">
      <label>${label}<input name="name" type="text" placeholder="${type === "income" ? "Palkka" : "Ruoka"}" required /></label>
      <label>Summa / kk<input name="amount" type="number" min="0" step="0.01" required /></label>
      <button class="primary-button" type="submit">Lisää</button>
    </form>
  `;
}

function budgetTypeListHtml(type) {
  const items = type === "income" ? state.incomeTypes : [...state.expenseTypes, ...investmentBudgetSummaryItems()];
  if (!items.length) return emptyStateHtml(type === "income" ? "Lisää perheen tulot." : "Lisää perheen kulut.");
  return items.map((item) => {
    const locked = type === "expense" && (isProtectedCarLoanExpense(item) || isProtectedInvestmentExpense(item));
    return `
      <article class="budget-item ${item.source === "investment" ? "clickable-budget-item" : ""}" ${item.source === "investment" ? `role="button" tabindex="0" data-open-investment-budget` : ""}>
        <div class="budget-top">
          <span class="${locked ? "" : "inline-edit-field"}" ${locked ? "" : `role="button" tabindex="0" title="Klikkaa muokataksesi" data-edit-inline-budget-type="${type}:${item.id}:name"`}><strong>${escapeHtml(item.name)}</strong></span>
          <div class="row-actions">
            <span class="${locked ? "" : "inline-edit-field"}" ${locked ? "" : `role="button" tabindex="0" title="Klikkaa muokataksesi" data-edit-inline-budget-type="${type}:${item.id}:amount"`}><strong>${currency.format(item.amount)}</strong></span>
            <button class="delete-button ${locked ? "locked-delete-button" : ""}" type="button" title="${locked ? "Tämä rivi tulee automaattisesti toisesta kortista" : "Poista"}" ${locked ? "disabled" : `data-delete-budget-type="${type}:${item.id}"`}>x</button>
          </div>
        </div>
        ${locked ? `<p class="muted">${item.source === "investment" ? "Tulee automaattisesti sijoituskorteilta. Klikkaa avataksesi erittelyn." : "Tulee automaattisesti auton lainasta."}</p>` : ""}
      </article>
    `;
  }).join("");
}

function investmentBudgetSummaryItems() {
  const total = investmentMonthlyExpenseTotal();
  if (total <= 0) return [];
  return [{
    id: "investment-summary",
    name: "Sijoitukset yhteensä",
    amount: total,
    source: "investment",
  }];
}

function investmentBudgetExpenseItems() {
  return state.investments
    .filter((investment) => Number(investment.monthlyContribution || 0) > 0)
    .map((investment) => ({
      id: `investment-${investment.id}`,
      name: `${investment.name} kuukausisijoitus`,
      amount: Number(investment.monthlyContribution || 0),
      source: "investment",
      investmentId: investment.id,
    }));
}

function openInvestmentBudgetDialog() {
  const items = investmentBudgetExpenseItems();
  const total = items.reduce((sum, item) => sum + Number(item.amount || 0), 0);
  el.investmentBudgetMeta.textContent = `Yhteensä ${currency.format(total)} / kk. Rivien summat tulevat suoraan sijoituskorteilta.`;
  el.investmentBudgetList.innerHTML = items.length ? items.map((item) => {
    const investment = state.investments.find((entry) => entry.id === item.investmentId);
    return `
      <article class="budget-item clickable-budget-item" role="button" tabindex="0" data-open-investment-detail="${item.investmentId}">
        <div class="budget-top">
          <div>
            <strong>${escapeHtml(investment?.name || item.name)}</strong>
            <p class="muted">${investment?.place ? `${escapeHtml(investment.place)} · ` : ""}${investmentTypeLabel(investment?.type)}</p>
          </div>
          <strong>${currency.format(item.amount)} / kk</strong>
        </div>
      </article>
    `;
  }).join("") : emptyStateHtml("Sijoituksille ei ole asetettu kuukausierää.");
  el.investmentBudgetDialog.showModal();
}

function investmentMonthlyExpenseTotal() {
  return investmentBudgetExpenseItems().reduce((total, item) => total + Number(item.amount || 0), 0);
}

function isProtectedInvestmentExpense(item) {
  return item?.source === "investment";
}

function isProtectedCarLoanExpense(item) {
  if (item?.source !== "car" || !item.carId) return false;
  const car = state.cars.find((entry) => entry.id === item.carId);
  if (!car) return false;
  const debt = state.debts.find((entry) => entry.id === car.debtId);
  const loanBalance = debt ? Number(debt.principal || 0) : Number(car.loanPrincipal || 0);
  return loanBalance > 0;
}

function syncCarLoanExpenses(targetState = state) {
  (targetState.cars || []).forEach((car) => syncCarLoanExpense(car, targetState));
}

function syncCarLoanExpense(car, targetState = state) {
  const debt = (targetState.debts || []).find((item) => item.id === car.debtId);
  const loanBalance = debt ? Number(debt.principal || 0) : Number(car.loanPrincipal || 0);
  const payment = debt ? Number(debt.monthlyPayment || 0) : Number(car.monthlyPayment || 0);
  const label = `${car.brand || ""} ${car.model || ""} ${car.plate || ""}`.trim() || "Auto";
  let expense = (targetState.expenseTypes || []).find((item) => item.id === car.expenseId) || (targetState.expenseTypes || []).find((item) => item.source === "car" && item.carId === car.id);
  if (loanBalance > 0) {
    if (!expense) {
      car.expenseId = crypto.randomUUID();
      expense = { id: car.expenseId, name: "", amount: 0, source: "car", carId: car.id };
      targetState.expenseTypes.push(expense);
    }
    car.expenseId = expense.id;
    expense.name = `${label} lainaerä`;
    expense.amount = payment;
    expense.source = "car";
    expense.carId = car.id;
  } else if (expense) {
    targetState.expenseTypes = targetState.expenseTypes.filter((item) => item.id !== expense.id);
    car.expenseId = null;
  }
}

function startInlineBudgetTypeEdit(node) {
  if (node.querySelector("input")) return;
  const [type, id, field] = node.dataset.editInlineBudgetType.split(":");
  const items = type === "income" ? state.incomeTypes : state.expenseTypes;
  const item = items.find((entry) => entry.id === id);
  if (!item) return;

  const input = document.createElement("input");
  input.className = "inline-item-input";
  input.type = field === "amount" ? "number" : "text";
  input.step = field === "amount" ? "0.01" : "";
  input.min = field === "amount" ? "0" : "";
  input.value = field === "amount" ? Number(item.amount || 0) : item.name;

  node.textContent = "";
  node.append(input);
  input.focus();
  input.select();

  let cancelled = false;
  const save = () => {
    if (cancelled) return;
    if (field === "name") {
      const value = input.value.trim();
      if (value) item.name = value;
    }
    if (field === "amount") item.amount = Number(input.value || 0);
    saveAndRender();
  };

  input.addEventListener("blur", save, { once: true });
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") input.blur();
    if (event.key === "Escape") {
      cancelled = true;
      render();
    }
  });
}

function transactionFormHtml() {
  return `
    <form data-transaction-form class="form-stack">
      <label>Kuvaus<input name="description" type="text" required /></label>
      <div class="form-row"><label>Summa<input name="amount" type="number" min="0.01" step="0.01" required /></label><label>Tyyppi<select name="type"><option value="expense">Meno</option><option value="income">Tulo</option></select></label></div>
      <div class="form-row"><label>Kategoria<select name="category">${categories.map((item) => `<option value="${item}">${item}</option>`).join("")}</select></label><label>Päivä<input name="date" type="date" value="${new Date().toISOString().slice(0, 10)}" required /></label></div>
      <label>Perheenjäsen<input name="member" type="text" placeholder="Koko perhe" /></label>
      <button class="primary-button" type="submit">Lisää</button>
    </form>
  `;
}

function allocationFormHtml() {
  const assetOptions = state.assets.map((asset) => `<option value="asset:${asset.id}">${escapeHtml(asset.name)} (säästöihin)</option>`).join("");
  const debtOptions = state.debts.map((debt) => `<option value="debt:${debt.id}">${escapeHtml(debt.name)} (velan maksuun)</option>`).join("");
  return `
    <form data-allocation-form class="form-stack">
      <label>Summa<input name="amount" type="number" min="0.01" step="0.01" required /></label>
      <label>Kohde<select name="target">${assetOptions}${debtOptions}</select></label>
      <label>Muistiinpano<input name="note" type="text" placeholder="Kuukauden ylijäämä" /></label>
      <button class="primary-button" type="submit">Kohdista</button>
    </form>
  `;
}

function financialEventFormHtml() {
  const targetOptions = financialEventTargetOptionsHtml();
  return `
    <form data-financial-event-form class="form-stack event-form">
      <div class="form-row">
        <label>Tapahtumatyyppi
          <select name="action">
            <option value="decreaseDebt">Vähennä velkaa</option>
            <option value="increaseDebt">Lisää velkaa</option>
            <option value="increaseAsset">Lisää varallisuuserän arvoa</option>
            <option value="decreaseAsset">Vähennä varallisuuserän arvoa</option>
            <option value="increaseInvestment">Lisää sijoituksen arvoa</option>
            <option value="decreaseInvestment">Vähennä sijoituksen arvoa</option>
          </select>
        </label>
        <label>Kohde
          <select name="target">${targetOptions}</select>
        </label>
      </div>
      <div class="form-row">
        <label>Summa<input name="amount" type="number" min="0.01" step="0.01" required /></label>
        <label>Päivä<input name="date" type="date" value="${new Date().toISOString().slice(0, 10)}" required /></label>
      </div>
      <label>Selite<input name="note" type="text" placeholder="Esim. ylimääräinen lainanlyhennys" /></label>
      <button class="primary-button" type="submit">Lisää tapahtuma</button>
    </form>
  `;
}

function financialEventTargetOptionsHtml() {
  const debts = state.debts.map((item) => `<option value="debt:${item.id}">${escapeHtml(item.name)} (velka)</option>`).join("");
  const assets = state.assets.map((item) => `<option value="asset:${item.id}">${escapeHtml(item.name)} (varallisuus)</option>`).join("");
  const investments = state.investments.map((item) => `<option value="investment:${item.id}">${escapeHtml(item.name)} (sijoitus)</option>`).join("");
  return `${debts}${assets}${investments}`;
}

function financialEventsHtml(limit = Infinity, options = {}) {
  const showDelete = options.showDelete !== false;
  const items = [...(state.financialEvents || [])].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, limit);
  if (!items.length) return emptyStateHtml("Ei vielä tapahtumia.");
  return items.map((item) => financialEventItemHtml(item, { showDelete })).join("");
}

function debtFinancialEventsHtml(debtId) {
  const items = financialEventsForTarget("debt", debtId);
  if (!items.length) return emptyStateHtml("Tälle velalle ei ole vielä tapahtumia.");
  return items.map((item) => financialEventItemHtml(item, { showDelete: true })).join("");
}

function debtProgressSvg(debt) {
  const actualPoints = debtActualProgressPoints(debt);
  const plannedPoints = debtPlannedProgressPoints(debt, actualPoints[0]);
  const allPoints = actualPoints.concat(plannedPoints);
  const width = 760;
  const height = 280;
  const pad = 64;
  const values = allPoints.map((point) => point.value);
  const max = Math.max(...values, 1);
  const min = Math.min(...values, 0);
  const range = Math.max(max - min, 1);
  const dates = allPoints.map((point) => new Date(point.date).getTime()).filter(Number.isFinite);
  const minTime = Math.min(...dates, new Date().getTime());
  const maxTime = Math.max(...dates, minTime + 1);
  const toChartPoint = (point) => {
    const time = new Date(point.date).getTime();
    const x = pad + ((time - minTime) / Math.max(maxTime - minTime, 1)) * (width - pad * 2);
    const y = height - pad - ((point.value - min) / range) * (height - pad * 2);
    return { ...point, x, y };
  };
  const actualChartPoints = actualPoints.map(toChartPoint);
  const plannedChartPoints = plannedPoints.map(toChartPoint);
  const actualLine = actualChartPoints.map((point) => `${point.x},${point.y}`).join(" ");
  const plannedLine = plannedChartPoints.map((point) => `${point.x},${point.y}`).join(" ");
  const plannedTicks = plannedChartPoints.filter((point, index) => index === 0 || index === plannedChartPoints.length - 1 || index % Math.max(1, Math.ceil(plannedChartPoints.length / 6)) === 0);
  const lastActual = actualPoints[actualPoints.length - 1];
  return `
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Velan kehitys">
      ${debtAxisSvg({ width, height, pad, max, min })}
      ${plannedLine ? `<polyline points="${plannedLine}" fill="none" stroke="#9CA3AF" stroke-width="3" stroke-dasharray="8 7" stroke-linecap="round" stroke-linejoin="round"></polyline>` : ""}
      ${actualLine ? `<polyline points="${actualLine}" fill="none" stroke="#10B981" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></polyline>` : ""}
      ${actualChartPoints.map((point, index) => `
        <g class="investment-checkpoint debt-checkpoint">
          <circle cx="${point.x}" cy="${point.y}" r="5"></circle>
          <title>${escapeHtml(point.label)}\n${currency.format(point.value)}</title>
          ${index % Math.max(1, Math.ceil(actualChartPoints.length / 5)) === 0 || index === actualChartPoints.length - 1 ? `<text x="${point.x}" y="${height - 18}" class="chart-label" text-anchor="middle">${escapeHtml(point.shortLabel)}</text>` : ""}
        </g>
      `).join("")}
      ${plannedTicks.map((point) => `
        <g class="debt-plan-tick">
          <line x1="${point.x}" y1="${height - pad}" x2="${point.x}" y2="${height - pad + 7}"></line>
          <text x="${point.x}" y="${height - 3}" class="chart-label" text-anchor="middle">${escapeHtml(point.shortLabel)}</text>
        </g>
      `).join("")}
      <g class="debt-chart-legend">
        <line x1="${pad}" y1="24" x2="${pad + 26}" y2="24" stroke="#10B981" stroke-width="4" stroke-linecap="round"></line>
        <text x="${pad + 34}" y="29" class="chart-label">Todellinen</text>
        <line x1="${pad + 132}" y1="24" x2="${pad + 158}" y2="24" stroke="#9CA3AF" stroke-width="3" stroke-dasharray="8 7" stroke-linecap="round"></line>
        <text x="${pad + 166}" y="29" class="chart-label">Suunniteltu</text>
      </g>
      <text x="${width - pad}" y="24" class="chart-value" text-anchor="end">${currency.format(lastActual?.value || 0)}</text>
    </svg>
  `;
}

function debtActualProgressPoints(debt) {
  const events = financialEventsForTarget("debt", debt.id).slice().reverse();
  const points = [];
  events.forEach((item, index) => {
    if (index === 0 && Number.isFinite(Number(item.previousValue))) {
      points.push(makeDebtPoint(item.date, Number(item.previousValue), "Ennen ensimmäistä tapahtumaa", "history"));
    }
    if (Number.isFinite(Number(item.newValue))) {
      points.push(makeDebtPoint(item.date, Number(item.newValue), item.note || financialEventActionLabel(item.action), "history"));
    }
  });
  const today = localIsoDate();
  if (!points.length || points[points.length - 1].value !== Number(debt.principal || 0) || points[points.length - 1].date !== today) {
    points.push(makeDebtPoint(localIsoDate(), Number(debt.principal || 0), "Nykyinen saldo", "current"));
  }
  return points;
}

function debtPlannedProgressPoints(debt) {
  let balance = Number(debt.originalPrincipal || debt.principal || 0);
  const payment = Number(debt.originalMonthlyPayment || debt.monthlyPayment || 0);
  const monthlyRate = Number(debt.annualRate || 0) / 100 / 12;
  const startDate = validIsoDate(debt.drawdownDate) ? new Date(debt.drawdownDate) : new Date();
  if (balance <= 0 || payment <= 0) return [makeDebtPoint(localIsoDate(startDate), balance, "Suunniteltu lähtö", "planned")];
  const points = [makeDebtPoint(localIsoDate(startDate), balance, "Suunniteltu lähtö", "planned")];
  const explicitEndDate = validIsoDate(debt.originalPayoffDate) ? new Date(debt.originalPayoffDate) : null;
  const maxMonths = explicitEndDate ? Math.max(1, monthsBetween(startDate, explicitEndDate)) : 420;
  const principalPayment = debt.loanType === "equalPrincipal" ? balance / maxMonths : 0;
  for (let month = 1; month <= maxMonths && balance > 0; month += 1) {
    const interest = balance * monthlyRate;
    if (payment <= interest && month > 1) break;
    balance = debt.loanType === "equalPrincipal"
      ? Math.max(0, balance - principalPayment)
      : Math.max(0, balance + interest - payment);
    if (explicitEndDate && month === maxMonths) balance = 0;
    if (month % 6 === 0 || balance === 0 || month === maxMonths) {
      const date = new Date(startDate);
      date.setMonth(date.getMonth() + month);
      if (explicitEndDate && month === maxMonths) date.setTime(explicitEndDate.getTime());
      points.push(makeDebtPoint(localIsoDate(date), balance, balance === 0 ? "Suunniteltu takaisinmaksu päättyy" : "Suunniteltu", "planned"));
    }
  }
  return points;
}

function validIsoDate(value) {
  return typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(new Date(value).getTime());
}

function monthsBetween(startDate, endDate) {
  return Math.max(1, (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth()));
}

function makeDebtPoint(date, value, label, kind) {
  const parsed = new Date(date);
  return {
    date,
    value: Math.max(0, Number(value || 0)),
    label,
    kind,
    shortLabel: Number.isNaN(parsed.getTime()) ? "" : `${parsed.getMonth() + 1}.${parsed.getFullYear()}`,
  };
}

function debtAxisSvg(settings) {
  const { width, height, pad, max, min } = settings;
  const ticks = [0, 0.5, 1].map((ratio) => {
    const value = min + (max - min) * ratio;
    const y = height - pad - ratio * (height - pad * 2);
    return `
      <line class="axis-grid" x1="${pad}" y1="${y}" x2="${width - pad}" y2="${y}"></line>
      <text x="${pad - 8}" y="${y + 4}" class="chart-label" text-anchor="end">${formatAxisCurrency(value)}</text>
    `;
  }).join("");
  return `
    <g class="chart-axis">
      ${ticks}
      <line class="axis-line" x1="${pad}" y1="${height - pad}" x2="${width - pad}" y2="${height - pad}"></line>
      <line class="axis-line" x1="${pad}" y1="${pad}" x2="${pad}" y2="${height - pad}"></line>
    </g>
  `;
}

function financialEventItemHtml(item, options = {}) {
  const showDelete = options.showDelete !== false;
  return `
    <article class="transaction-item clickable-log-item" data-open-financial-event-detail="${item.id}" tabindex="0">
      <div class="transaction-top">
        <strong>${escapeHtml(financialEventActionLabel(item.action))}</strong>
        <div class="row-actions">
          <strong>${currency.format(item.amount)}</strong>
          ${showDelete ? `<button class="delete-button" type="button" data-delete-financial-event="${item.id}" title="Poista tapahtuma">x</button>` : ""}
        </div>
      </div>
      <div class="transaction-meta">
        <span class="pill">${escapeHtml(item.targetName || "")}</span>
        <span>${dateFormatForLanguage().format(new Date(item.date))}</span>
      </div>
      ${Number.isFinite(Number(item.previousValue)) && Number.isFinite(Number(item.newValue)) ? `<p class="muted">Edellinen ${currency.format(item.previousValue)} → uusi ${currency.format(item.newValue)} (${Number(item.delta || 0) >= 0 ? "+" : "-"}${currency.format(Math.abs(Number(item.delta || 0)))})</p>` : ""}
      ${item.note ? `<p class="muted">${escapeHtml(item.note)}</p>` : ""}
    </article>
  `;
}

function financialEventsForTarget(type, id) {
  return [...(state.financialEvents || [])]
    .filter((item) => item.targetType === type && item.targetId === id)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

function financialEventActionLabel(action) {
  const labels = {
    decreaseDebt: "Vähennä velkaa",
    increaseDebt: "Lisää velkaa",
    increaseProperty: "Nosta kiinteistön arvoa",
    decreaseProperty: "Laske kiinteistön arvoa",
    increaseAsset: "Lisää varallisuutta",
    decreaseAsset: "Vähennä varallisuutta",
    increaseInvestment: "Lisää sijoitusta",
    decreaseInvestment: "Vähennä sijoitusta",
  };
  return labels[action] || "Tapahtuma";
}

function investmentFormHtml() {
  return `
    <form data-investment-form class="form-stack inline-form">
      <label>Nimi<input name="name" type="text" required /></label>
      <label>Paikka<input name="place" type="text" placeholder="Nordnet, pankki..." /></label>
      <label>Tyyppi<select name="type"><option value="fund">Rahasto</option><option value="stock">Osake</option><option value="cash">Käteinen</option><option value="other">Muu</option></select></label>
      <label>Arvo<input name="value" type="number" min="0" step="0.01" required /></label>
      <label>Kuukausisijoitus<input name="monthly" type="number" min="0" step="0.01" value="0" /></label>
      <label>Arvioaika<input name="targetDate" type="date" /></label>
      <label>Tuotto-odotus %<input name="expectedReturn" type="number" min="-50" step="0.1" value="5" /></label>
      <label>Tavoitteen nimi<input name="goalName" type="text" placeholder="Esim. opintorahasto" /></label>
      <label>Tavoitesumma<input name="goalAmount" type="number" min="0" step="0.01" /></label>
      <button class="primary-button" type="submit">Lisää</button>
    </form>
  `;
}

function tipFormHtml() {
  return `
    <form data-tip-form class="form-stack tip-form">
      <label>Vinkki<input name="title" type="text" required /></label>
      <label>Vaikutus / kk<input name="impact" type="number" step="0.01" /></label>
      <label>Muistiinpano<textarea name="note" rows="3"></textarea></label>
      <button class="primary-button" type="submit">Lisää vinkki</button>
    </form>
  `;
}

function budgetsHtml(monthTransactions) {
  if (!state.budgets.length) return emptyStateHtml("Lisää kuukausibudjetti kategorioille.");
  return state.budgets.map((budget) => {
    const used = sum(monthTransactions.filter((item) => item.type === "expense" && item.category === budget.category));
    const percent = budget.limit ? Math.min((used / budget.limit) * 100, 100) : 0;
    return `
      <article class="budget-item ${used > budget.limit ? "over" : ""}">
        <div class="budget-top"><strong>${escapeHtml(budget.category)}</strong><button class="delete-button" type="button" data-delete-budget="${budget.id}">x</button></div>
        <p class="muted">${currency.format(used)} / ${currency.format(budget.limit)}</p>
        <div class="progress"><span style="width:${percent}%"></span></div>
      </article>
    `;
  }).join("");
}

function transactionsHtml(items) {
  if (!items.length) return emptyStateHtml("Ei tapahtumia tässä kuussa.");
  return items.map((item) => `
    <article class="transaction-item">
      <div class="transaction-top"><strong>${escapeHtml(item.description)}</strong><div class="row-actions"><strong class="${item.type === "income" ? "amount-income" : "amount-expense"}">${item.type === "income" ? "+" : "-"}${currency.format(item.amount)}</strong><button class="delete-button" type="button" data-delete-transaction="${item.id}">x</button></div></div>
      <div class="transaction-meta"><span class="pill">${escapeHtml(item.category)}</span><span>${escapeHtml(item.member)}</span><span>${dateFormat.format(new Date(item.date))}</span></div>
    </article>
  `).join("");
}

function chartRangeControls(key) {
  const value = state.chartRanges[key] || "12m";
  const options = [
    ["1m", "1 kk"],
    ["3m", "3 kk"],
    ["6m", "6 kk"],
    ["12m", "12 kk"],
    ["3y", "3 v"],
    ["5y", "5 v"],
  ];
  return `
    <div class="chart-controls">
      <label>Aikaväli
        <select data-chart-range="${key}">
          ${options.map(([option, label]) => `<option value="${option}" ${option === value ? "selected" : ""}>${label}</option>`).join("")}
        </select>
      </label>
    </div>
  `;
}

function wealthChartSvg(range = "12m") {
  const history = filterHistoryByRange([...(state.wealthHistory || []), currentWealthPoint()], range);
  if (history.length < 2) return emptyStateHtml("Varallisuusdiagrammi päivittyy, kun arvoja kertyy.");
  const width = 980;
  const height = 420;
  const pad = 52;
  const values = history.map((item) => Number(item.value || 0));
  const min = Math.min(...values);
  const max = Math.max(...values);
  const valueRange = Math.max(max - min, 1);
  const points = history.map((item, index) => {
    const x = pad + (index / Math.max(history.length - 1, 1)) * (width - pad * 2);
    const y = height - pad - ((Number(item.value || 0) - min) / valueRange) * (height - pad * 2);
    return { ...item, x, y };
  });
  const line = points.map((point) => `${point.x},${point.y}`).join(" ");
  const area = `${pad},${height - pad} ${line} ${width - pad},${height - pad}`;
  const first = points[0];
  const last = points[points.length - 1];
  return `
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Varallisuuden kehitys">
      <polyline points="${area}" fill="#EFF6FF" stroke="none"></polyline>
      <polyline points="${line}" fill="none" stroke="#3B82F6" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></polyline>
      ${points.map((point) => `<circle cx="${point.x}" cy="${point.y}" r="4" fill="#10B981"></circle>`).join("")}
      ${points.map((point, index) => index % Math.max(1, Math.ceil(points.length / 8)) === 0 || index === points.length - 1 ? `<text x="${point.x}" y="${height - 8}" class="chart-label" text-anchor="middle">${escapeHtml(historyLabel(point))}</text>` : "").join("")}
      <text x="${pad}" y="20" class="chart-value">${currency.format(max)}</text>
      <text x="${pad}" y="${height - 38}" class="chart-label">${currency.format(min)}</text>
      <text x="${width - pad}" y="20" class="chart-value" text-anchor="end">${currency.format(last.value)}</text>
    </svg>
  `;
}

function currentWealthPoint() {
  const now = new Date();
  return {
    date: localIsoDate(now),
    label: "Tänään",
    value: totalAssets() - totalDebts(),
  };
}

function localIsoDate(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function filterHistoryByRange(history, range) {
  const normalized = history
    .map((item) => ({ ...item, date: item.date || labelToDate(item.label) }))
    .filter((item) => item.date)
    .sort((a, b) => new Date(a.date) - new Date(b.date));
  if (!normalized.length) return history;
  const last = new Date(normalized[normalized.length - 1].date);
  const start = new Date(last);
  const ranges = { "1m": 1, "3m": 3, "6m": 6, "12m": 12, "3y": 36, "5y": 60 };
  start.setMonth(start.getMonth() - (ranges[range] || 12) + 1);
  return normalized.filter((item) => new Date(item.date) >= start);
}

function labelToDate(label) {
  const labels = ["tammi", "helmi", "maalis", "huhti", "touko", "kesä", "heinä", "elo", "syys", "loka", "marras", "joulu"];
  const index = labels.indexOf(String(label || "").toLowerCase());
  if (index === -1) return null;
  return `2026-${String(index + 1).padStart(2, "0")}-01`;
}

function historyLabel(point) {
  if (!point.date) return point.label || "";
  const date = new Date(point.date);
  return `${date.getDate()}.${date.getMonth() + 1}.`;
}

function debtPieData() {
  return state.debts.map((debt) => ({ label: debt.name, value: Number(debt.principal || 0) })).filter((item) => item.value > 0);
}

function assetPieData() {
  const assets = state.assets.map((asset) => ({ label: asset.name, value: Number(asset.value || 0) }));
  const investments = state.investments.map((investment) => ({ label: investment.name, value: Number(investment.value || 0) }));
  const cars = state.cars.map((car) => ({ label: `${car.brand || ""} ${car.model || ""}`.trim() || "Auto", value: Number(car.currentValue || 0) }));
  return [...assets, ...investments, ...cars].filter((item) => item.value > 0);
}

function pieChartSvg(data, centerLabel) {
  if (!data.length) return emptyStateHtml("Diagrammi päivittyy, kun arvoja on lisätty.");
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const colors = ["#3B82F6", "#10B981", "#F97316", "#6366F1", "#14B8A6", "#EF4444", "#8B5CF6", "#F59E0B"];
  let start = -90;
  const slices = data.map((item, index) => {
    const degrees = (item.value / total) * 360;
    const path = donutSlicePath(160, 160, 120, 62, start, start + degrees);
    start += degrees;
    return { ...item, color: colors[index % colors.length], path };
  });
  return `
    <div class="pie-layout">
      <svg viewBox="0 0 320 320" role="img" aria-label="${escapeHtml(centerLabel)}">
        ${slices.map((slice) => `<path d="${slice.path}" fill="${slice.color}"></path>`).join("")}
        <circle cx="160" cy="160" r="58" fill="#ffffff"></circle>
        <text x="160" y="154" class="chart-label" text-anchor="middle">${escapeHtml(centerLabel)}</text>
        <text x="160" y="178" class="chart-value" text-anchor="middle">${currency.format(total)}</text>
      </svg>
      <div class="pie-legend">
        ${slices.map((slice) => `<div><span style="background:${slice.color}"></span><strong>${escapeHtml(slice.label)}</strong><em>${formatPercent((slice.value / total) * 100)} · ${currency.format(slice.value)}</em></div>`).join("")}
      </div>
    </div>
  `;
}

function donutSlicePath(cx, cy, outerR, innerR, startAngle, endAngle) {
  const largeArc = endAngle - startAngle > 180 ? 1 : 0;
  const startOuter = polarToCartesian(cx, cy, outerR, endAngle);
  const endOuter = polarToCartesian(cx, cy, outerR, startAngle);
  const startInner = polarToCartesian(cx, cy, innerR, startAngle);
  const endInner = polarToCartesian(cx, cy, innerR, endAngle);
  return [
    `M ${startOuter.x} ${startOuter.y}`,
    `A ${outerR} ${outerR} 0 ${largeArc} 0 ${endOuter.x} ${endOuter.y}`,
    `L ${startInner.x} ${startInner.y}`,
    `A ${innerR} ${innerR} 0 ${largeArc} 1 ${endInner.x} ${endInner.y}`,
    "Z",
  ].join(" ");
}

function polarToCartesian(cx, cy, r, angle) {
  const radians = (angle - 90) * Math.PI / 180;
  return { x: cx + r * Math.cos(radians), y: cy + r * Math.sin(radians) };
}

function addTransactionFromForm(form) {
  const data = new FormData(form);
  state.transactions.unshift(makeTransaction(data.get("description").trim(), Number(data.get("amount")), data.get("type"), data.get("category"), data.get("member").trim() || "Koko perhe", data.get("date")));
  saveAndRender();
}

function addAllocationFromForm(form) {
  const data = new FormData(form);
  const [type, id] = data.get("target").split(":");
  const amount = Number(data.get("amount"));
  const note = data.get("note").trim() || "Kohdistus";
  if (type === "asset") {
    const asset = state.assets.find((item) => item.id === id);
    if (!asset) return;
    asset.value += amount;
    state.transactions.unshift(makeTransaction(note, amount, "expense", "Säästö", asset.name));
  } else {
    const debt = state.debts.find((item) => item.id === id);
    if (!debt) return;
    debt.principal = Math.max(0, debt.principal - amount);
    state.transactions.unshift(makeTransaction(note, amount, "expense", "Velan maksu", debt.name));
  }
  saveAndRender();
}

function addFinancialEventFromForm(form) {
  const data = new FormData(form);
  const action = data.get("action");
  const [targetType, targetId] = String(data.get("target") || "").split(":");
  const amount = Number(data.get("amount") || 0);
  if (!targetType || !targetId || amount <= 0) return;
  if (!financialEventActionMatchesTarget(action, targetType)) {
    alert("Valittu tapahtumatyyppi ei sovi valittuun kohteeseen.");
    return;
  }
  const target = findFinancialEventTarget(targetType, targetId);
  if (!target) return;

  applyFinancialEventChange(action, targetType, target, amount);

  state.financialEvents.unshift({
    id: crypto.randomUUID(),
    action,
    targetType,
    targetId,
    targetName: financialEventTargetName(targetType, target),
    amount,
    date: data.get("date") || new Date().toISOString().slice(0, 10),
    note: String(data.get("note") || "").trim(),
  });
  form.reset();
  saveAndRender();
}

function saveFinancialEventFromDialog(event) {
  event.preventDefault();
  const kind = el.financialEventKind.value;
  const targetId = el.financialEventTarget.value;
  const oldEvent = editingFinancialEventId ? state.financialEvents.find((item) => item.id === editingFinancialEventId) : null;
  if (oldEvent) revertFinancialEventImpact(oldEvent);
  const target = findFinancialEventTarget(kind, targetId);
  if (!target) {
    if (oldEvent) applyStoredFinancialEventImpact(oldEvent);
    return;
  }
  const previousValue = financialEventTargetValue(kind, target);
  const entered = Number(el.financialEventAmount.value || 0);
  if (entered < 0 || (el.financialEventMode.value === "change" && entered <= 0)) {
    if (oldEvent) applyStoredFinancialEventImpact(oldEvent);
    return;
  }
  const nextValue = el.financialEventMode.value === "set"
    ? entered
    : el.financialEventDirection.value === "minus"
      ? Math.max(0, previousValue - entered)
      : previousValue + entered;
  const delta = nextValue - previousValue;
  applyDialogFinancialEventChange(kind, target, nextValue);
  const nextEvent = {
    id: oldEvent?.id || crypto.randomUUID(),
    action: dialogFinancialEventAction(kind, delta),
    targetType: kind,
    targetId: target.id,
    targetName: dialogFinancialEventTargetName(kind, target),
    amount: Math.abs(delta),
    previousValue,
    newValue: nextValue,
    delta,
    date: el.financialEventDate.value || localIsoDate(),
    note: el.financialEventNote.value.trim(),
  };
  if (oldEvent) {
    const index = state.financialEvents.findIndex((item) => item.id === oldEvent.id);
    if (index >= 0) state.financialEvents[index] = nextEvent;
  } else {
    state.financialEvents.unshift(nextEvent);
  }
  editingFinancialEventId = "";
  el.financialEventDialog.close();
  if (el.eventLogDialog.open) renderEventLogDialog();
  refreshOpenDebtDialogPanels();
  saveAndRender();
}

function applyDialogFinancialEventChange(kind, target, nextValue) {
  if (kind === "debt") {
    target.principal = Math.max(0, Number(nextValue || 0));
    syncDebtLinkedEntities(target);
  }
  if (kind === "property") {
    target.value = Math.max(0, Number(nextValue || 0));
    const asset = state.assets.find((item) => item.id === target.assetId);
    if (asset) asset.value = target.value;
  }
  if (kind === "investment") {
    target.value = Math.max(0, Number(nextValue || 0));
  }
}

function applyStoredFinancialEventImpact(item) {
  const target = findFinancialEventTarget(item.targetType, item.targetId);
  if (!target) return false;
  if (Number.isFinite(Number(item.newValue))) {
    applyDialogFinancialEventChange(item.targetType, target, Number(item.newValue));
    return true;
  }
  applyFinancialEventChange(item.action, item.targetType, target, Number(item.amount || 0));
  return true;
}

function revertFinancialEventImpact(item) {
  const target = findFinancialEventTarget(item.targetType, item.targetId);
  if (!target) return false;
  if (Number.isFinite(Number(item.previousValue))) {
    applyDialogFinancialEventChange(item.targetType, target, Number(item.previousValue));
    return true;
  }
  applyFinancialEventChange(inverseFinancialEventAction(item.action), item.targetType, target, Number(item.amount || 0));
  return true;
}

function inverseFinancialEventAction(action) {
  const inverses = {
    decreaseDebt: "increaseDebt",
    increaseDebt: "decreaseDebt",
    increaseProperty: "decreaseProperty",
    decreaseProperty: "increaseProperty",
    increaseAsset: "decreaseAsset",
    decreaseAsset: "increaseAsset",
    increaseInvestment: "decreaseInvestment",
    decreaseInvestment: "increaseInvestment",
  };
  return inverses[action] || action;
}

function deleteFinancialEventFromDialog() {
  if (!editingFinancialEventId) return;
  deleteFinancialEvent(editingFinancialEventId);
}

function deleteFinancialEvent(id) {
  const item = state.financialEvents.find((entry) => entry.id === id);
  if (!item) return;
  const ok = window.confirm("Haluatko varmasti poistaa tämän tapahtuman? Muutos perutaan myös varallisuuden ja velan saldoista.");
  if (!ok) return;
  revertFinancialEventImpact(item);
  state.deletedFinancialEvents = state.deletedFinancialEvents || [];
  state.deletedFinancialEvents.unshift({ ...item, deletedAt: new Date().toISOString() });
  state.financialEvents = state.financialEvents.filter((entry) => entry.id !== id);
  editingFinancialEventId = "";
  if (el.financialEventDialog.open) el.financialEventDialog.close();
  if (el.eventLogDialog.open) renderEventLogDialog();
  refreshOpenDebtDialogPanels();
  saveAndRender();
}

function restoreLastDeletedFinancialEvent() {
  const [item] = state.deletedFinancialEvents || [];
  if (!item) {
    alert("Poistettuja tapahtumia ei ole palautettavissa.");
    return;
  }
  const restored = { ...item, id: crypto.randomUUID() };
  delete restored.deletedAt;
  if (!applyStoredFinancialEventImpact(restored)) {
    alert("Tapahtumaa ei voi palauttaa, koska alkuperäistä kohdetta ei enää löydy.");
    return;
  }
  state.deletedFinancialEvents.shift();
  state.financialEvents.unshift(restored);
  renderEventLogDialog();
  refreshOpenDebtDialogPanels();
  saveAndRender();
}

function refreshOpenDebtDialogPanels() {
  if (!el.debtDialog.open || !el.debtId.value) return;
  const debt = state.debts.find((item) => item.id === el.debtId.value);
  if (debt) renderDebtDialogPanels(debt);
}

function updateFinancialEventTargetNames(type, id, name) {
  state.financialEvents.forEach((item) => {
    if (item.targetType === type && item.targetId === id) item.targetName = name;
  });
  (state.deletedFinancialEvents || []).forEach((item) => {
    if (item.targetType === type && item.targetId === id) item.targetName = name;
  });
}

function dialogFinancialEventAction(kind, delta) {
  if (kind === "debt") return delta < 0 ? "decreaseDebt" : "increaseDebt";
  if (kind === "property") return delta < 0 ? "decreaseProperty" : "increaseProperty";
  if (kind === "investment") return delta < 0 ? "decreaseInvestment" : "increaseInvestment";
  return "event";
}

function dialogFinancialEventTargetName(kind, target) {
  if (kind === "property") return target.address;
  return target.name;
}

function financialEventActionMatchesTarget(action, targetType) {
  if (targetType === "debt") return action === "decreaseDebt" || action === "increaseDebt";
  if (targetType === "asset") return action === "increaseAsset" || action === "decreaseAsset";
  if (targetType === "property") return action === "increaseProperty" || action === "decreaseProperty";
  if (targetType === "investment") return action === "increaseInvestment" || action === "decreaseInvestment";
  return false;
}

function findFinancialEventTarget(type, id) {
  if (type === "debt") return state.debts.find((item) => item.id === id);
  if (type === "property") return state.properties.find((item) => item.id === id);
  if (type === "asset") return state.assets.find((item) => item.id === id);
  if (type === "investment") return state.investments.find((item) => item.id === id);
  return null;
}

function applyFinancialEventChange(action, targetType, target, amount) {
  if (targetType === "debt") {
    if (action === "decreaseDebt") target.principal = Math.max(0, Number(target.principal || 0) - amount);
    if (action === "increaseDebt") target.principal = Number(target.principal || 0) + amount;
    syncDebtLinkedEntities(target);
  }
  if (targetType === "asset") {
    if (action === "increaseAsset") target.value = Number(target.value || 0) + amount;
    if (action === "decreaseAsset") target.value = Math.max(0, Number(target.value || 0) - amount);
    syncLinkedPropertyFromAsset(target);
  }
  if (targetType === "property") {
    if (action === "increaseProperty") target.value = Number(target.value || 0) + amount;
    if (action === "decreaseProperty") target.value = Math.max(0, Number(target.value || 0) - amount);
    const asset = state.assets.find((item) => item.id === target.assetId);
    if (asset) asset.value = target.value;
  }
  if (targetType === "investment") {
    if (action === "increaseInvestment") target.value = Number(target.value || 0) + amount;
    if (action === "decreaseInvestment") target.value = Math.max(0, Number(target.value || 0) - amount);
  }
}

function syncDebtLinkedEntities(debt) {
  const property = state.properties.find((item) => item.debtId === debt.id);
  if (property) {
    property.loanPrincipal = Number(debt.principal || 0);
    property.annualRate = Number(debt.annualRate || 0);
    property.monthlyPayment = Number(debt.monthlyPayment || 0);
  }
  const car = state.cars.find((item) => item.debtId === debt.id);
  if (car) {
    car.loanPrincipal = Number(debt.principal || 0);
    car.annualRate = Number(debt.annualRate || 0);
    car.monthlyPayment = Number(debt.monthlyPayment || 0);
    syncCarLoanExpense(car, state);
  }
}

function financialEventTargetName(type, target) {
  if (type === "debt") return target.name;
  if (type === "property") return target.address;
  if (type === "asset") return target.name;
  if (type === "investment") return target.name;
  return "";
}

function addInvestmentFromForm(form) {
  const data = new FormData(form);
  const value = Number(data.get("value") || 0);
  state.investments.push({
    id: crypto.randomUUID(),
    name: data.get("name").trim(),
    place: String(data.get("place") || "").trim(),
    type: data.get("type"),
    value,
    monthlyContribution: Number(data.get("monthly") || 0),
    targetDate: data.get("targetDate") || "",
    expectedReturn: Number(data.get("expectedReturn") || 0),
    goalName: String(data.get("goalName") || "").trim(),
    goalAmount: Number(data.get("goalAmount") || 0),
    startValue: value,
    createdAt: localIsoDate(),
  });
  form.reset();
  saveAndRender();
}

function openInvestmentDialog(investmentId) {
  const investment = state.investments.find((item) => item.id === investmentId);
  if (!investment) return;
  setInvestmentDialogSize();
  el.investmentDialogForm.reset();
  el.investmentId.value = investment.id;
  el.investmentDialogTitle.textContent = investment.name || "Muokkaa sijoitusta";
  el.investmentName.value = investment.name || "";
  el.investmentPlace.value = investment.place || "";
  el.investmentValue.value = Number(investment.value || 0);
  el.investmentMonthly.value = Number(investment.monthlyContribution || 0);
  el.investmentTargetDate.value = investment.targetDate || "";
  el.investmentExpectedReturn.value = Number(investment.expectedReturn || 0);
  el.investmentGoalName.value = investment.goalName || "";
  el.investmentGoalAmount.value = Number(investment.goalAmount || 0) || "";
  el.investmentType.value = investment.type || "fund";
  renderInvestmentDialogPanels(investment);
  el.investmentDialog.showModal();
}

function openNewInvestmentDialog() {
  setInvestmentDialogSize();
  el.investmentDialogForm.reset();
  el.investmentId.value = "";
  el.investmentDialogTitle.textContent = "Uusi sijoitus";
  el.investmentName.value = "";
  el.investmentPlace.value = "";
  el.investmentValue.value = "";
  el.investmentMonthly.value = 0;
  el.investmentTargetDate.value = "";
  el.investmentExpectedReturn.value = 5;
  el.investmentGoalName.value = "";
  el.investmentGoalAmount.value = "";
  el.investmentType.value = "fund";
  el.investmentChartBox.innerHTML = emptyStateHtml("Sijoituksen kehitys näkyy, kun sijoitus on tallennettu.");
  el.investmentEventsList.innerHTML = emptyStateHtml("Tapahtumia voi kirjata tallennuksen jälkeen.");
  el.investmentDialog.showModal();
}

function setInvestmentDialogSize() {
  el.investmentDialog.style.width = "min(980px, calc(100vw - 32px))";
  el.investmentDialog.style.maxWidth = "calc(100vw - 32px)";
  el.investmentDialog.style.minWidth = "min(860px, calc(100vw - 32px))";
}

function renderInvestmentDialogPanels(investment) {
  el.investmentChartBox.innerHTML = investmentProgressSvg(investment);
  el.investmentEventsList.innerHTML = investmentFinancialEventsHtml(investment.id);
}

function saveInvestmentDialog(event) {
  event.preventDefault();
  const isNew = !el.investmentId.value;
  const investment = isNew
    ? { id: crypto.randomUUID(), startValue: Number(el.investmentValue.value || 0), createdAt: localIsoDate() }
    : state.investments.find((item) => item.id === el.investmentId.value);
  if (!investment) return;
  investment.name = el.investmentName.value.trim();
  investment.place = el.investmentPlace.value.trim();
  investment.value = Number(el.investmentValue.value || 0);
  investment.monthlyContribution = Number(el.investmentMonthly.value || 0);
  investment.targetDate = el.investmentTargetDate.value;
  investment.expectedReturn = Number(el.investmentExpectedReturn.value || 0);
  investment.goalName = el.investmentGoalName.value.trim();
  investment.goalAmount = Number(el.investmentGoalAmount.value || 0);
  investment.type = el.investmentType.value || "fund";
  investment.startValue = Number(investment.startValue || investment.value || 0);
  investment.createdAt = investment.createdAt || localIsoDate();
  if (isNew) state.investments.push(investment);
  updateFinancialEventTargetNames("investment", investment.id, investment.name);
  el.investmentDialog.close();
  saveAndRender();
}

function openInvestmentEventDialog() {
  const investment = state.investments.find((item) => item.id === el.investmentId.value);
  if (!investment) return;
  el.investmentDialog.close();
  openFinancialEventDialog("", {
    kind: "investment",
    targetId: investment.id,
    direction: "plus",
    mode: "change",
    note: "Sijoituksen muutos",
  });
}

function investmentFinancialEventsHtml(investmentId) {
  const events = financialEventsForTarget("investment", investmentId);
  return events.length ? events.map((event) => financialEventItemHtml(event)).join("") : emptyStateHtml("Ei sijoitukseen kohdistuvia tapahtumia.");
}

function investmentProgressSvg(investment) {
  const plannedPoints = investmentPlannedProgressPoints(investment);
  const actualPoints = investmentActualProgressPoints(investment);
  const allPoints = [...plannedPoints, ...actualPoints];
  if (!allPoints.length) return emptyStateHtml("Ei vielä graafidata.");
  const width = 860;
  const height = 340;
  const pad = 78;
  const times = allPoints.map((point) => new Date(point.date).getTime());
  const minTime = Math.min(...times);
  const maxTime = Math.max(...times);
  const goalAmount = Number(investment.goalAmount || 0);
  const values = [...allPoints.map((point) => point.value), goalAmount].filter((value) => Number(value) > 0);
  const max = Math.max(...values, 1);
  const min = Math.min(0, ...values);
  const range = Math.max(max - min, 1);
  const mapPoint = (point) => {
    const time = new Date(point.date).getTime();
    return {
      ...point,
      x: pad + ((time - minTime) / Math.max(maxTime - minTime, 1)) * (width - pad * 2),
      y: height - pad - ((point.value - min) / range) * (height - pad * 2),
    };
  };
  const planned = plannedPoints.map(mapPoint);
  const actual = actualPoints.map(mapPoint);
  const plannedLine = planned.map((point) => `${point.x},${point.y}`).join(" ");
  const actualLine = actual.map((point) => `${point.x},${point.y}`).join(" ");
  const lastPlanned = planned[planned.length - 1];
  const goalY = goalAmount > 0 ? height - pad - ((goalAmount - min) / range) * (height - pad * 2) : null;
  const goalLabelY = goalY !== null ? (goalY < pad + 24 ? goalY + 18 : goalY - 8) : null;
  return `
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Sijoituksen kehitys">
      ${debtAxisSvg({ width, height, pad, max, min })}
      ${goalY !== null ? `
        <line x1="${pad}" y1="${goalY}" x2="${width - pad}" y2="${goalY}" stroke="#3B82F6" stroke-width="3" stroke-dasharray="4 8" stroke-linecap="round"></line>
        <text x="${width - pad}" y="${goalLabelY}" class="chart-label" text-anchor="end">Tavoite ${currency.format(goalAmount)}</text>
      ` : ""}
      ${plannedLine ? `<polyline points="${plannedLine}" fill="none" stroke="#F97316" stroke-width="4" stroke-dasharray="10 8" stroke-linecap="round" stroke-linejoin="round"></polyline>` : ""}
      ${actualLine ? `<polyline points="${actualLine}" fill="none" stroke="#10B981" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></polyline>` : ""}
      ${planned.map((point, index) => index % Math.max(1, Math.ceil(planned.length / 6)) === 0 || index === planned.length - 1 ? `
        <g class="debt-plan-tick">
          <line x1="${point.x}" y1="${height - pad}" x2="${point.x}" y2="${height - pad + 7}"></line>
          <text x="${point.x}" y="${height - 3}" class="chart-label" text-anchor="middle">${escapeHtml(point.shortLabel)}</text>
        </g>
      ` : "").join("")}
      ${planned.map((point, index) => index === planned.length - 1 ? `<circle cx="${point.x}" cy="${point.y}" r="7" fill="#F97316" stroke="#ffffff" stroke-width="3"><title>Arvio ${currency.format(point.value)}</title></circle>` : "").join("")}
      ${actual.map((point) => `<circle cx="${point.x}" cy="${point.y}" r="6" fill="#3B82F6" stroke="#ffffff" stroke-width="3"><title>${escapeHtml(point.label)} ${currency.format(point.value)}</title></circle>`).join("")}
      <g class="debt-chart-legend">
        <line x1="${pad}" y1="24" x2="${pad + 26}" y2="24" stroke="#10B981" stroke-width="4" stroke-linecap="round"></line>
        <text x="${pad + 34}" y="29" class="chart-label">Toteutunut</text>
        <line x1="${pad + 132}" y1="24" x2="${pad + 158}" y2="24" stroke="#F97316" stroke-width="3" stroke-dasharray="8 7" stroke-linecap="round"></line>
        <text x="${pad + 166}" y="29" class="chart-label">Arvio</text>
        ${goalAmount > 0 ? `<line x1="${pad + 226}" y1="24" x2="${pad + 252}" y2="24" stroke="#3B82F6" stroke-width="3" stroke-dasharray="4 7" stroke-linecap="round"></line><text x="${pad + 260}" y="29" class="chart-label">Tavoite</text>` : ""}
      </g>
      <text x="${width - pad}" y="15" class="chart-label" text-anchor="end">Arvio</text>
      <text x="${width - pad}" y="36" class="chart-value" text-anchor="end">${currency.format(lastPlanned?.value || 0)}</text>
    </svg>
  `;
}

function investmentPlannedProgressPoints(investment) {
  const startDate = new Date();
  const fallbackEndDate = new Date(startDate);
  fallbackEndDate.setFullYear(fallbackEndDate.getFullYear() + 5);
  const targetDate = validIsoDate(investment.targetDate) ? new Date(investment.targetDate) : fallbackEndDate;
  const endDate = targetDate > startDate ? targetDate : fallbackEndDate;
  const months = Math.max(1, monthsBetween(startDate, endDate));
  const monthlyRate = Number(investment.expectedReturn || 0) / 100 / 12;
  let value = Number(investment.value || 0);
  const monthly = Number(investment.monthlyContribution || 0);
  const points = [makeDebtPoint(localIsoDate(startDate), value, "Nykyinen arvo ennusteen lähtönä", "planned")];
  const pointEvery = Math.max(1, Math.floor(months / 12));
  for (let month = 1; month <= months; month += 1) {
    value = value * (1 + monthlyRate) + monthly;
    if (month % pointEvery === 0 || month === months) {
      const date = new Date(startDate);
      date.setMonth(date.getMonth() + month);
      if (month === months) date.setTime(endDate.getTime());
      points.push(makeDebtPoint(localIsoDate(date), value, month === months ? "Arvioaika" : "Arvio", "planned"));
    }
  }
  return points;
}

function investmentActualProgressPoints(investment) {
  const startValue = Number(investment.startValue || investment.value || 0);
  const startDate = investment.createdAt || localIsoDate();
  let value = startValue;
  const points = [makeDebtPoint(startDate, value, "Lähtöarvo", "actual")];
  financialEventsForTarget("investment", investment.id)
    .slice()
    .reverse()
    .forEach((event) => {
      value = Number.isFinite(Number(event.newValue)) ? Number(event.newValue) : value + Number(event.delta || 0);
      points.push(makeDebtPoint(event.date, value, event.note || financialEventActionLabel(event.action), "actual"));
    });
  const today = localIsoDate();
  if (!points.length || points[points.length - 1].date !== today || points[points.length - 1].value !== Number(investment.value || 0)) {
    points.push(makeDebtPoint(today, Number(investment.value || 0), "Nykyinen arvo", "actual"));
  }
  return points;
}

function investmentTargetProjection(investment) {
  const points = investmentPlannedProgressPoints(investment);
  const last = points[points.length - 1];
  return {
    value: Number(last?.value || investment.value || 0),
    label: last?.date ? dateFormatForLanguage().format(new Date(last.date)) : "5 v",
  };
}

function investmentGoalPlan(investment) {
  const goal = Number(investment.goalAmount || 0);
  const projection = investmentTargetProjection(investment);
  const startDate = new Date();
  const fallbackEndDate = new Date(startDate);
  fallbackEndDate.setFullYear(fallbackEndDate.getFullYear() + 5);
  const targetDate = validIsoDate(investment.targetDate) ? new Date(investment.targetDate) : fallbackEndDate;
  const endDate = targetDate > startDate ? targetDate : fallbackEndDate;
  const months = Math.max(1, monthsBetween(startDate, endDate));
  const monthlyRate = Number(investment.expectedReturn || 0) / 100 / 12;
  const current = Number(investment.value || 0);
  const futureCurrent = current * Math.pow(1 + monthlyRate, months);
  let recommendedMonthly = 0;
  if (goal > futureCurrent) {
    const missing = goal - futureCurrent;
    recommendedMonthly = monthlyRate === 0
      ? missing / months
      : missing * monthlyRate / (Math.pow(1 + monthlyRate, months) - 1);
  }
  const probability = goal > 0 ? Math.min(100, Math.max(0, (Number(projection.value || 0) * 100) / goal)) : 0;
  return {
    goal,
    months,
    probability,
    recommendedMonthly: Math.max(0, recommendedMonthly),
    gap: Math.max(0, goal - Number(projection.value || 0)),
    projection: Number(projection.value || 0),
  };
}

function investmentGoalAdvice(investment, plan) {
  const currentMonthly = Number(investment.monthlyContribution || 0);
  if (!Number(investment.goalAmount || 0)) return "";
  if (plan.probability >= 100) return "Nykyisellä suunnitelmalla tavoite ylittyy arvion mukaan.";
  const increase = Math.max(0, plan.recommendedMonthly - currentMonthly);
  if (increase <= 1) return "Nykyinen kuukausierä on lähellä tavoitetasoa.";
  return `Nosta kuukausierää noin ${currency.format(increase)} / kk. Arvio jää tavoitteesta ${currency.format(plan.gap)}.`;
}

function addTipFromForm(form) {
  const data = new FormData(form);
  state.tips.unshift({ id: crypto.randomUUID(), title: data.get("title").trim(), impact: Number(data.get("impact") || 0), note: data.get("note").trim(), done: false });
  saveAndRender();
}

function addBudgetTypeFromForm(form) {
  const data = new FormData(form);
  const type = form.dataset.budgetTypeForm;
  const target = type === "income" ? state.incomeTypes : state.expenseTypes;
  target.push({
    id: crypto.randomUUID(),
    name: data.get("name").trim(),
    amount: Number(data.get("amount") || 0),
  });
  saveAndRender();
}

function saveProfileFromForm(form) {
  const profile = activeProfile();
  if (!profile) return;
  const data = new FormData(form);
  profile.firstName = data.get("firstName").trim();
  profile.lastName = data.get("lastName").trim();
  profile.email = (data.get("email") || "").trim();
  profile.birthday = data.get("birthday");
  profile.language = validLanguage(data.get("language"));
  profile.currency = validCurrency(data.get("currency"));
  state.language = profile.language;
  state.currency = profile.currency;
  state.authEmail = normalizeEmail(profile.email);
  saveAndRender();
}

function addChildFromForm(form) {
  const profile = activeProfile();
  if (!profile) return;
  const data = new FormData(form);
  profile.children = Array.isArray(profile.children) ? profile.children : [];
  profile.children.push({ id: crypto.randomUUID(), name: data.get("name").trim(), birthday: data.get("birthday") });
  saveAndRender();
}

function registerEmailFromForm(form) {
  const profile = activeProfile();
  if (!profile) return;
  const data = new FormData(form);
  profile.email = data.get("email").trim();
  state.authEmail = normalizeEmail(profile.email);
  saveAndRender();
}

function addFamilyMemberFromForm(form) {
  const profile = activeProfile();
  if (!profile) return;
  const data = new FormData(form);
  profile.familyMembers = Array.isArray(profile.familyMembers) ? profile.familyMembers : [];
  profile.familyMembers.push({
    id: crypto.randomUUID(),
    name: data.get("name").trim(),
    email: (data.get("email") || "").trim(),
    role: (data.get("role") || "").trim(),
  });
  saveAndRender();
}

function deleteFamilyMember(memberId) {
  const profile = activeProfile();
  if (!profile) return;
  profile.familyMembers = (profile.familyMembers || []).filter((member) => member.id !== memberId);
  saveAndRender();
}

function deleteChild(childId) {
  const profile = activeProfile();
  if (!profile) return;
  profile.children = (profile.children || []).filter((child) => child.id !== childId);
  saveAndRender();
}

function deleteBudgetType(payload) {
  const [type, id] = payload.split(":");
  if (type === "income") {
    state.incomeTypes = state.incomeTypes.filter((item) => item.id !== id);
  } else {
    const item = state.expenseTypes.find((entry) => entry.id === id);
    if (item && isProtectedCarLoanExpense(item)) {
      alert("Auton lainaerää ei voi poistaa budjetista, koska auton laina on vielä auki.");
      return;
    }
    state.expenseTypes = state.expenseTypes.filter((item) => item.id !== id);
  }
  saveAndRender();
}

function addBudget(event) {
  event.preventDefault();
  const existing = state.budgets.find((budget) => budget.category === el.budgetCategory.value);
  if (existing) existing.limit = Number(el.budgetLimit.value);
  else state.budgets.push({ id: crypto.randomUUID(), category: el.budgetCategory.value, limit: Number(el.budgetLimit.value) });
  el.budgetForm.reset();
  el.budgetDialog.close();
  saveAndRender();
}

function addGoal(event) {
  event.preventDefault();
  state.goals.push({ id: crypto.randomUUID(), name: el.goalName.value.trim(), target: Number(el.goalTarget.value), saved: Number(el.goalSaved.value) });
  el.goalForm.reset();
  el.goalDialog.close();
  saveAndRender();
}

function openNewDebtDialog() {
  el.debtForm.reset();
  el.debtId.value = "";
  el.debtDialogTitle.textContent = "Uusi velka";
  el.debtPrincipalLabel.firstChild.textContent = "Nykyinen saldo ";
  el.debtPrincipal.readOnly = false;
  el.debtPrincipal.classList.remove("readonly-input");
  el.debtPrincipal.dataset.originalPrincipal = "";
  el.debtOriginalPrincipal.value = "";
  el.debtDrawdownDate.value = localIsoDate();
  el.debtLoanType.value = "annuity";
  el.debtOriginalPayment.value = "";
  el.debtOriginalPayoffDate.value = "";
  updateDebtPlanPreview();
  el.debtDetailsPanel.hidden = true;
  el.debtDialog.showModal();
}

function openDebtDialog(debtId) {
  const debt = state.debts.find((item) => item.id === debtId);
  if (!debt) return;
  el.debtForm.reset();
  el.debtId.value = debt.id;
  el.debtDialogTitle.textContent = debt.name || "Muokkaa velkaa";
  el.debtName.value = debt.name || "";
  el.debtPrincipalLabel.firstChild.textContent = "Nykyinen saldo ";
  el.debtPrincipal.value = Number(debt.principal || 0);
  el.debtPrincipal.dataset.originalPrincipal = String(Number(debt.originalPrincipal || debt.principal || 0));
  el.debtPrincipal.readOnly = true;
  el.debtPrincipal.classList.add("readonly-input");
  el.debtOriginalPrincipal.value = Number(debt.originalPrincipal || debt.principal || 0);
  el.debtDrawdownDate.value = debt.drawdownDate || localIsoDate();
  el.debtLoanType.value = normalizeLoanType(debt.loanType);
  el.debtRate.value = Number(debt.annualRate || 0);
  el.debtPayment.value = Number(debt.monthlyPayment || 0);
  el.debtOriginalPayment.value = Number(debt.originalMonthlyPayment || debt.monthlyPayment || 0);
  el.debtOriginalPayoffDate.value = debt.originalPayoffDate || "";
  el.debtNotes.value = debt.notes || "";
  updateDebtPlanPreview();
  el.debtDetailsPanel.hidden = false;
  renderDebtDialogPanels(debt);
  el.debtDialog.showModal();
}

function renderDebtDialogPanels(debt) {
  el.debtChartBox.innerHTML = debtProgressSvg(debt);
  el.debtEventsList.innerHTML = debtFinancialEventsHtml(debt.id);
}

function updateDebtPlanPreview() {
  if (!el.debtId.value && !el.debtOriginalPrincipal.value && el.debtPrincipal.value) {
    el.debtOriginalPrincipal.value = el.debtPrincipal.value;
  }
  const principal = Number(el.debtOriginalPrincipal.value || el.debtPrincipal.dataset.originalPrincipal || el.debtPrincipal.value || 0);
  const rate = Number(el.debtRate.value || 0);
  const start = validIsoDate(el.debtDrawdownDate.value) ? new Date(el.debtDrawdownDate.value) : new Date();
  const end = validIsoDate(el.debtOriginalPayoffDate.value) ? new Date(el.debtOriginalPayoffDate.value) : null;
  const months = end ? monthsBetween(start, end) : 0;
  const calculatedPayment = calculateLoanMonthlyPayment(principal, rate, months, el.debtLoanType.value);
  if (calculatedPayment > 0 && (!el.debtOriginalPayment.value || !el.debtId.value)) {
    el.debtOriginalPayment.value = calculatedPayment.toFixed(2);
  }
  if (calculatedPayment > 0 && !el.debtPayment.value && !el.debtId.value) {
    el.debtPayment.value = calculatedPayment.toFixed(2);
  }
  const payment = Number(el.debtOriginalPayment.value || calculatedPayment || 0);
  const totalInterest = estimateLoanTotalInterest(principal, rate, payment, months, el.debtLoanType.value);
  el.debtInterestEstimate.textContent = `Korkoja koko laina-ajalta arviolta ${currency.format(totalInterest)}${months ? ` (${months} kk)` : ""}`;
}

function calculateLoanMonthlyPayment(principal, annualRate, months, type = "annuity") {
  if (principal <= 0 || months <= 0) return 0;
  const monthlyRate = Number(annualRate || 0) / 100 / 12;
  if (type === "equalPrincipal") return principal / months + principal * monthlyRate;
  if (monthlyRate <= 0) return principal / months;
  return principal * (monthlyRate / (1 - Math.pow(1 + monthlyRate, -months)));
}

function estimateLoanTotalInterest(principal, annualRate, payment, months, type = "annuity") {
  if (principal <= 0 || months <= 0) return 0;
  const monthlyRate = Number(annualRate || 0) / 100 / 12;
  if (monthlyRate <= 0) return 0;
  if (type === "equalPrincipal") {
    const principalPayment = principal / months;
    let balance = principal;
    let interestTotal = 0;
    for (let month = 1; month <= months && balance > 0; month += 1) {
      const interest = balance * monthlyRate;
      interestTotal += interest;
      balance = Math.max(0, balance - principalPayment);
    }
    return interestTotal;
  }
  const monthlyPayment = payment > 0 ? payment : calculateLoanMonthlyPayment(principal, annualRate, months, type);
  return Math.max(0, monthlyPayment * months - principal);
}

function openDebtEventDialog() {
  const debtId = el.debtId.value;
  const debt = state.debts.find((item) => item.id === debtId);
  if (!debt) return;
  el.debtDialog.close();
  openFinancialEventDialog("", {
    kind: "debt",
    targetId: debt.id,
    direction: "minus",
    mode: "change",
    note: "Velan lyhennys",
  });
}

function saveDebt(event) {
  event.preventDefault();
  const existing = state.debts.find((item) => item.id === el.debtId.value);
  if (existing) {
    existing.name = el.debtName.value.trim();
    existing.originalPrincipal = Number(el.debtOriginalPrincipal.value || existing.originalPrincipal || existing.principal || 0);
    existing.drawdownDate = el.debtDrawdownDate.value || existing.drawdownDate || localIsoDate();
    existing.loanType = normalizeLoanType(el.debtLoanType.value);
    existing.annualRate = Number(el.debtRate.value || 0);
    existing.monthlyPayment = Number(el.debtPayment.value || 0);
    existing.originalMonthlyPayment = Number(el.debtOriginalPayment.value || existing.monthlyPayment || 0);
    existing.originalPayoffDate = el.debtOriginalPayoffDate.value;
    existing.notes = el.debtNotes.value.trim();
    syncDebtLinkedEntities(existing);
    updateFinancialEventTargetNames("debt", existing.id, existing.name);
  } else {
    const originalPrincipal = Number(el.debtOriginalPrincipal.value || el.debtPrincipal.value || 0);
    createDebtRecord({
      name: el.debtName.value.trim(),
      principal: Number(el.debtPrincipal.value || originalPrincipal || 0),
      originalPrincipal,
      drawdownDate: el.debtDrawdownDate.value || localIsoDate(),
      loanType: normalizeLoanType(el.debtLoanType.value),
      annualRate: Number(el.debtRate.value || 0),
      monthlyPayment: Number(el.debtPayment.value || 0),
      originalMonthlyPayment: Number(el.debtOriginalPayment.value || el.debtPayment.value || 0),
      originalPayoffDate: el.debtOriginalPayoffDate.value,
      notes: el.debtNotes.value.trim(),
    }, { logInitial: true, note: "Velka luotu", date: el.debtDrawdownDate.value || localIsoDate() });
    el.debtForm.reset();
  }
  el.debtDialog.close();
  saveAndRender();
}

function createDebtRecord(data, options = {}) {
  const debt = {
    id: data.id || crypto.randomUUID(),
    name: data.name || "Velka",
    principal: Number(data.principal || 0),
    originalPrincipal: Number(data.originalPrincipal || data.principal || 0),
    drawdownDate: data.drawdownDate || localIsoDate(),
    loanType: normalizeLoanType(data.loanType),
    annualRate: Number(data.annualRate || 0),
    monthlyPayment: Number(data.monthlyPayment || 0),
    originalMonthlyPayment: Number(data.originalMonthlyPayment || data.monthlyPayment || 0),
    originalPayoffDate: data.originalPayoffDate || "",
    notes: data.notes || "",
  };
  state.debts.push(debt);
  if (options.logInitial && debt.principal > 0) createInitialDebtEvent(debt, options.note || "Velka luotu", options.date);
  return debt;
}

function createInitialDebtEvent(debt, note = "Velka luotu", date = localIsoDate()) {
  state.financialEvents.unshift({
    id: crypto.randomUUID(),
    action: "increaseDebt",
    targetType: "debt",
    targetId: debt.id,
    targetName: debt.name,
    amount: Number(debt.principal || 0),
    previousValue: 0,
    newValue: Number(debt.principal || 0),
    delta: Number(debt.principal || 0),
    date,
    note,
  });
}

function addAsset(event) {
  event.preventDefault();
  state.assets.push({
    id: crypto.randomUUID(),
    name: el.assetName.value.trim(),
    place: el.assetPlace.value.trim(),
    value: Number(el.assetValue.value),
    type: el.assetType.value,
    goalName: el.assetGoalName.value.trim(),
    goalAmount: Number(el.assetGoalAmount.value || 0),
  });
  el.assetForm.reset();
  el.assetDialog.close();
  saveAndRender();
}

function openAssetEditDialog(assetId) {
  const asset = state.assets.find((item) => item.id === assetId);
  if (!asset) return;
  el.assetOverviewPanel.innerHTML = assetOverviewPanelHtml(asset);
  el.editAssetId.value = asset.id;
  el.editAssetName.value = asset.name;
  el.editAssetPlace.value = asset.place || "";
  el.editAssetValue.value = asset.value;
  el.editAssetType.value = asset.type;
  el.editAssetGoalName.value = asset.goalName || "";
  el.editAssetGoalAmount.value = Number(asset.goalAmount || 0) || "";
  el.assetEditDialog.showModal();
}

function assetOverviewPanelHtml(asset) {
  const goal = assetGoalStatus(asset);
  return `
    <div class="asset-dialog-hero">
      <div>
        <span>Nykyarvo</span>
        <strong>${currency.format(asset.value)}</strong>
      </div>
      <span class="pill">${assetTypeLabel(asset.type)}</span>
    </div>
    <div class="asset-dialog-facts">
      <div><span>Paikka</span><strong>${escapeHtml(asset.place || "Ei asetettu")}</strong></div>
      <div><span>Tavoite</span><strong>${goal.hasGoal ? currency.format(goal.target) : "Ei asetettu"}</strong></div>
      <div><span>Tila</span><strong>${goal.hasGoal ? `${formatPercent(goal.percent)} saavutettu` : "Lisää tavoite tarvittaessa"}</strong></div>
    </div>
    ${goal.hasGoal ? `
      <div class="asset-dialog-goal">
        <div class="budget-top"><strong>${escapeHtml(goal.name)}</strong><span>${formatPercent(goal.percent)}</span></div>
        <div class="progress"><span style="width:${goal.percent}%"></span></div>
        <p class="muted">${currency.format(goal.saved)} / ${currency.format(goal.target)} · puuttuu ${currency.format(goal.missing)}</p>
      </div>
      <div class="wealth-chart asset-dialog-chart">${assetGoalProgressSvg(asset)}</div>
    ` : `<p class="muted">Tälle omaisuuserälle ei ole vielä asetettu tavoitetta.</p>`}
  `;
}

function saveAssetEdit(event) {
  event.preventDefault();
  const asset = state.assets.find((item) => item.id === el.editAssetId.value);
  if (!asset) return;
  asset.name = el.editAssetName.value.trim();
  asset.place = el.editAssetPlace.value.trim();
  asset.value = Number(el.editAssetValue.value);
  asset.type = el.editAssetType.value;
  asset.goalName = el.editAssetGoalName.value.trim();
  asset.goalAmount = Number(el.editAssetGoalAmount.value || 0);

  syncLinkedPropertyFromAsset(asset);

  el.assetEditDialog.close();
  saveAndRender();
}

function syncLinkedPropertyFromAsset(asset) {
  const property = state.properties.find((item) => item.assetId === asset.id);
  if (!property) return;
  property.address = asset.name;
  property.value = asset.value;
}

function openNewPropertyDialog() {
  el.propertyForm.reset();
  el.propertyId.value = "";
  el.propertyDialogTitle.textContent = "Uusi kiinteistö";
  ["propertyLoan", "propertyRate", "propertyPayment", "propertyFee", "propertyRent"].forEach((key) => (el[key].value = 0));
  el.propertyDetailsPanel.hidden = true;
  el.propertyCostsPanel.hidden = true;
  resetPropertyCostFields();
  el.propertyDialog.showModal();
}

function openPropertyDialog(propertyId) {
  const property = state.properties.find((item) => item.id === propertyId);
  if (!property) return;
  const linkedDebt = state.debts.find((debt) => debt.id === property.debtId);
  el.propertyId.value = property.id;
  el.propertyDialogTitle.textContent = property.address || "Muokkaa kiinteistöä";
  el.propertyAddress.value = property.address || "";
  el.propertyType.value = property.type || "other";
  el.propertyPurchasePrice.value = Number(property.purchasePrice || 0);
  el.propertyValue.value = Number(property.value || 0);
  el.propertyLoan.value = linkedDebt ? Number(linkedDebt.principal || 0) : Number(property.loanPrincipal || 0);
  el.propertyRate.value = linkedDebt ? Number(linkedDebt.annualRate || 0) : Number(property.annualRate || 0);
  el.propertyPayment.value = linkedDebt ? Number(linkedDebt.monthlyPayment || 0) : Number(property.monthlyPayment || 0);
  el.propertyFee.value = Number(property.monthlyFee || 0);
  el.propertyRent.value = Number(property.monthlyRent || 0);
  el.propertyNotes.value = property.notes || "";
  el.propertyTenantFirstName.value = property.tenantFirstName || "";
  el.propertyTenantLastName.value = property.tenantLastName || "";
  el.propertyTenantId.value = property.tenantId || "";
  el.propertyRentReviewDate.value = property.rentReviewDate || "";
  el.propertyDetailsPanel.hidden = false;
  el.propertyCostsPanel.hidden = false;
  resetPropertyCostFields();
  renderPropertyDialogPanels(property);
  el.propertyDialog.showModal();
}

function saveProperty(event) {
  event.preventDefault();
  const existing = state.properties.find((item) => item.id === el.propertyId.value);
  if (existing) updateProperty(existing);
  else createProperty();
  el.propertyDialog.close();
  saveAndRender();
}

function createProperty() {
  const assetId = crypto.randomUUID();
  const debtId = Number(el.propertyLoan.value) > 0 ? crypto.randomUUID() : null;
  const property = {
    id: crypto.randomUUID(),
    address: el.propertyAddress.value.trim(),
    type: el.propertyType.value,
    purchasePrice: Number(el.propertyPurchasePrice.value),
    value: Number(el.propertyValue.value),
    loanPrincipal: Number(el.propertyLoan.value || 0),
    annualRate: Number(el.propertyRate.value || 0),
    monthlyPayment: Number(el.propertyPayment.value || 0),
    monthlyFee: Number(el.propertyFee.value || 0),
    monthlyRent: Number(el.propertyRent.value || 0),
    notes: "",
    tenantFirstName: "",
    tenantLastName: "",
    tenantId: "",
    rentReviewDate: "",
    photos: [],
    propertyCosts: [],
    assetId,
    debtId,
  };
  state.properties.push(property);
  state.assets.push({ id: assetId, name: property.address, type: "property", value: property.value });
  if (property.loanPrincipal > 0) {
    createDebtRecord({
      id: debtId,
      name: `${property.address} laina`,
      principal: property.loanPrincipal,
      originalPrincipal: property.loanPrincipal,
      annualRate: property.annualRate,
      monthlyPayment: property.monthlyPayment,
      originalMonthlyPayment: property.monthlyPayment,
      notes: "Luotu kiinteistön lainasta.",
    }, { logInitial: true, note: "Kiinteistölaina luotu" });
  }
  el.propertyForm.reset();
  ["propertyLoan", "propertyRate", "propertyPayment", "propertyFee", "propertyRent"].forEach((key) => (el[key].value = 0));
}

function updateProperty(property) {
  property.address = el.propertyAddress.value.trim();
  property.type = el.propertyType.value;
  property.purchasePrice = Number(el.propertyPurchasePrice.value || 0);
  property.value = Number(el.propertyValue.value || 0);
  property.loanPrincipal = Number(el.propertyLoan.value || 0);
  property.annualRate = Number(el.propertyRate.value || 0);
  property.monthlyPayment = Number(el.propertyPayment.value || 0);
  property.monthlyFee = Number(el.propertyFee.value || 0);
  property.monthlyRent = Number(el.propertyRent.value || 0);
  property.notes = el.propertyNotes.value.trim();
  property.tenantFirstName = el.propertyTenantFirstName.value.trim();
  property.tenantLastName = el.propertyTenantLastName.value.trim();
  property.tenantId = el.propertyTenantId.value.trim();
  property.rentReviewDate = el.propertyRentReviewDate.value;
  const asset = state.assets.find((item) => item.id === property.assetId);
  if (asset) {
    asset.name = property.address;
    asset.value = property.value;
    asset.type = "property";
  }
  let debt = state.debts.find((item) => item.id === property.debtId);
  if (property.loanPrincipal > 0) {
    if (!debt) {
      property.debtId = crypto.randomUUID();
      debt = createDebtRecord({
        id: property.debtId,
        name: `${property.address} laina`,
        principal: property.loanPrincipal,
        originalPrincipal: property.loanPrincipal,
        annualRate: property.annualRate,
        monthlyPayment: property.monthlyPayment,
        originalMonthlyPayment: property.monthlyPayment,
        notes: "Luotu kiinteistön lainasta.",
      }, { logInitial: true, note: "Kiinteistölaina luotu" });
    }
    debt.name = `${property.address} laina`;
    debt.principal = property.loanPrincipal;
    debt.annualRate = property.annualRate;
    debt.monthlyPayment = property.monthlyPayment;
    updateFinancialEventTargetNames("debt", debt.id, debt.name);
  } else if (debt) {
    state.debts = state.debts.filter((item) => item.id !== debt.id);
    property.debtId = null;
  }
}

function openNewCarDialog() {
  el.carForm.reset();
  el.carId.value = "";
  el.carDialogTitle.textContent = "Uusi auto";
  ["carLoan", "carRate", "carPayment"].forEach((key) => (el[key].value = 0));
  el.carCurrentValue.value = "";
  updateCarModelList("");
  el.carCostsPanel.hidden = true;
  resetCarCostFields();
  el.carDialog.showModal();
}

function openCarDialog(carId) {
  const car = state.cars.find((item) => item.id === carId);
  if (!car) return;
  const linkedDebt = state.debts.find((debt) => debt.id === car.debtId);
  const linkedExpense = state.expenseTypes.find((item) => item.id === car.expenseId);
  el.carId.value = car.id;
  el.carDialogTitle.textContent = `${car.brand} ${car.model}`.trim() || "Muokkaa autoa";
  el.carPlate.value = car.plate || "";
  el.carBrand.value = car.brand || "";
  el.carModel.value = car.model || "";
  updateCarModelList(car.brand || "");
  el.carYear.value = car.year || "";
  el.carPurchaseYear.value = car.purchaseYear || "";
  el.carPurchasePrice.value = car.purchasePrice || 0;
  el.carCurrentValue.value = Number(car.currentValue ?? car.purchasePrice ?? 0);
  el.carLoan.value = linkedDebt ? Number(linkedDebt.principal || 0) : Number(car.loanPrincipal || 0);
  el.carRate.value = linkedDebt ? Number(linkedDebt.annualRate || 0) : Number(car.annualRate || 0);
  el.carPayment.value = linkedExpense ? Number(linkedExpense.amount || 0) : Number(car.monthlyPayment || 0);
  el.carCostsPanel.hidden = false;
  resetCarCostFields();
  renderCarCostsPanel(car);
  el.carDialog.showModal();
}

function saveCar(event) {
  event.preventDefault();
  const existing = state.cars.find((item) => item.id === el.carId.value);
  if (existing) updateCar(existing);
  else createCar();
  el.carDialog.close();
  saveAndRender();
}

function createCar() {
  const carId = crypto.randomUUID();
  const debtId = Number(el.carLoan.value || 0) > 0 ? crypto.randomUUID() : null;
  const expenseId = null;
  const label = `${el.carBrand.value.trim()} ${el.carModel.value.trim()} ${el.carPlate.value.trim()}`.trim();
  const car = {
    id: carId,
    plate: el.carPlate.value.trim(),
    brand: el.carBrand.value.trim(),
    model: el.carModel.value.trim(),
    year: Number(el.carYear.value || 0),
    purchaseYear: Number(el.carPurchaseYear.value || 0),
    purchasePrice: Number(el.carPurchasePrice.value || 0),
    currentValue: Number(el.carCurrentValue.value || el.carPurchasePrice.value || 0),
    loanPrincipal: Number(el.carLoan.value || 0),
    annualRate: Number(el.carRate.value || 0),
    monthlyPayment: Number(el.carPayment.value || 0),
    debtId,
    expenseId,
    maintenanceCosts: [],
  };
  state.cars.push(car);
  if (debtId) {
    createDebtRecord({
      id: debtId,
      name: `${label} laina`,
      principal: car.loanPrincipal,
      originalPrincipal: car.loanPrincipal,
      annualRate: car.annualRate,
      monthlyPayment: car.monthlyPayment,
      originalMonthlyPayment: car.monthlyPayment,
      notes: "Luotu auton lainasta.",
    }, { logInitial: true, note: "Autolaina luotu" });
  }
  syncCarLoanExpense(car, state);
  el.carForm.reset();
  ["carLoan", "carRate", "carPayment"].forEach((key) => (el[key].value = 0));
}

function updateCar(car) {
  car.plate = el.carPlate.value.trim();
  car.brand = el.carBrand.value.trim();
  car.model = el.carModel.value.trim();
  car.year = Number(el.carYear.value || 0);
  car.purchaseYear = Number(el.carPurchaseYear.value || 0);
  car.purchasePrice = Number(el.carPurchasePrice.value || 0);
  car.currentValue = Number(el.carCurrentValue.value || car.purchasePrice || 0);
  car.loanPrincipal = Number(el.carLoan.value || 0);
  car.annualRate = Number(el.carRate.value || 0);
  car.monthlyPayment = Number(el.carPayment.value || 0);
  const label = `${car.brand} ${car.model} ${car.plate}`.trim();
  let debt = state.debts.find((item) => item.id === car.debtId);
  if (car.loanPrincipal > 0) {
    if (!debt) {
      car.debtId = crypto.randomUUID();
      debt = createDebtRecord({
        id: car.debtId,
        name: `${label} laina`,
        principal: car.loanPrincipal,
        originalPrincipal: car.loanPrincipal,
        annualRate: car.annualRate,
        monthlyPayment: car.monthlyPayment,
        originalMonthlyPayment: car.monthlyPayment,
        notes: "Luotu auton lainasta.",
      }, { logInitial: true, note: "Autolaina luotu" });
    }
    debt.name = `${label} laina`;
    debt.principal = car.loanPrincipal;
    debt.annualRate = car.annualRate;
    debt.monthlyPayment = car.monthlyPayment;
    updateFinancialEventTargetNames("debt", debt.id, debt.name);
  } else if (debt) {
    state.debts = state.debts.filter((item) => item.id !== debt.id);
    car.debtId = null;
  }

  syncCarLoanExpense(car, state);
}

function editPropertyById(propertyId) {
  const property = state.properties.find((item) => item.id === propertyId);
  if (!property) return;
  const nextAddress = prompt("Osoite", property.address);
  if (nextAddress === null) return;
  const nextValue = promptNumber("Kiinteistön nykyinen arvo", property.value);
  if (nextValue === null) return;
  const nextLoan = promptNumber("Lainaa jäljellä", linkedDebtValue(property, "principal", property.loanPrincipal));
  if (nextLoan === null) return;
  const nextRate = promptNumber("Korko %", linkedDebtValue(property, "annualRate", property.annualRate));
  if (nextRate === null) return;
  const nextPayment = promptNumber("Lainan kk-erä", linkedDebtValue(property, "monthlyPayment", property.monthlyPayment));
  if (nextPayment === null) return;
  const nextFee = promptNumber("Vastike / kk", property.monthlyFee);
  if (nextFee === null) return;
  const nextRent = promptNumber("Vuokra / kk", property.monthlyRent);
  if (nextRent === null) return;
  property.address = nextAddress.trim() || property.address;
  property.value = nextValue;
  property.loanPrincipal = nextLoan;
  property.annualRate = nextRate;
  property.monthlyPayment = nextPayment;
  property.monthlyFee = nextFee;
  property.monthlyRent = nextRent;
  const asset = state.assets.find((item) => item.id === property.assetId);
  if (asset) {
    asset.name = property.address;
    asset.value = property.value;
  }
  let debt = state.debts.find((item) => item.id === property.debtId);
  if (nextLoan > 0) {
    if (!debt) {
      property.debtId = crypto.randomUUID();
      debt = createDebtRecord({
        id: property.debtId,
        name: `${property.address} laina`,
        principal: nextLoan,
        originalPrincipal: nextLoan,
        annualRate: nextRate,
        monthlyPayment: nextPayment,
        originalMonthlyPayment: nextPayment,
        notes: "Luotu kiinteistön lainasta.",
      }, { logInitial: true, note: "Kiinteistölaina luotu" });
    }
    debt.name = `${property.address} laina`;
    debt.principal = nextLoan;
    debt.annualRate = nextRate;
    debt.monthlyPayment = nextPayment;
    updateFinancialEventTargetNames("debt", debt.id, debt.name);
  } else if (debt) {
    state.debts = state.debts.filter((item) => item.id !== debt.id);
    property.debtId = null;
  }
  saveAndRender();
}

function deleteProperty(propertyId) {
  const property = state.properties.find((item) => item.id === propertyId);
  state.properties = state.properties.filter((item) => item.id !== propertyId);
  if (property?.assetId) state.assets = state.assets.filter((asset) => asset.id !== property.assetId);
  if (property?.debtId) state.debts = state.debts.filter((debt) => debt.id !== property.debtId);
  saveAndRender();
}

function deleteCar(carId) {
  const car = state.cars.find((item) => item.id === carId);
  state.cars = state.cars.filter((item) => item.id !== carId);
  if (car?.debtId) state.debts = state.debts.filter((debt) => debt.id !== car.debtId);
  if (car?.expenseId) state.expenseTypes = state.expenseTypes.filter((item) => item.id !== car.expenseId);
  saveAndRender();
}

function addPropertyCostFromDialog() {
  const property = state.properties.find((item) => item.id === el.propertyId.value);
  if (!property) return;
  const amount = Number(el.propertyCostAmount.value || 0);
  if (amount <= 0) {
    el.propertyCostAmount.setCustomValidity("Lisää kulun summa.");
    el.propertyCostAmount.reportValidity();
    el.propertyCostAmount.addEventListener("input", () => el.propertyCostAmount.setCustomValidity(""), { once: true });
    return;
  }
  property.propertyCosts = Array.isArray(property.propertyCosts) ? property.propertyCosts : [];
  property.propertyCosts.push({
    id: crypto.randomUUID(),
    type: el.propertyCostType.value || "other",
    amount,
    recurrence: el.propertyCostRecurrence.value || "monthly",
    date: el.propertyCostDate.value || new Date().toISOString().slice(0, 10),
    note: el.propertyCostNote.value.trim(),
  });
  resetPropertyCostFields();
  renderPropertyDialogPanels(property);
  persistState();
  renderSummary();
  renderActiveCards();
}

function deletePropertyCost(payload) {
  const [propertyId, costId] = String(payload || "").split(":");
  const property = state.properties.find((item) => item.id === propertyId);
  if (!property) return;
  property.propertyCosts = (property.propertyCosts || []).filter((cost) => cost.id !== costId);
  if (el.propertyId.value === property.id && el.propertyDialog.open) {
    renderPropertyDialogPanels(property);
    persistState();
    renderActiveCards();
  } else {
    saveAndRender();
  }
}

function resetPropertyCostFields() {
  el.propertyCostType.value = "repair";
  el.propertyCostAmount.value = "";
  el.propertyCostRecurrence.value = "monthly";
  el.propertyCostDate.value = new Date().toISOString().slice(0, 10);
  el.propertyCostNote.value = "";
}

function renderPropertyDialogPanels(property) {
  renderPropertyPhotosPanel(property);
  renderPropertyCostsPanel(property);
}

function renderPropertyPhotosPanel(property) {
  const photos = Array.isArray(property.photos) ? property.photos : [];
  el.propertyPhotoGrid.innerHTML = photos.map((photo, index) => `
    <button class="photo-thumb-button" type="button" data-open-property-photo data-property-id="${property.id}" data-photo-index="${index}">
      <img src="${photo}" alt="Kiinteistön kuva ${index + 1}" />
    </button>
  `).join("");
}

function renderPropertyCostsPanel(property) {
  const costs = Array.isArray(property.propertyCosts) ? property.propertyCosts : [];
  const total = propertyCostTotal(property);
  const monthly = propertyMonthlyCostTotal(property);
  el.propertyCostsTotal.textContent = `Kulut yhteensä ${currency.format(total)} · Kuukausikulut ${currency.format(monthly)} / kk`;
  el.propertyCostsList.innerHTML = costs.length ? costs.map((cost) => `
    <div class="car-cost-item">
      <div>
        <strong>${propertyCostTypeLabel(cost.type)}</strong>
        <p class="muted">${cost.recurrence === "monthly" ? "Kuukausikulu" : "Kertakulu"}${cost.date ? ` · ${dateFormatForLanguage().format(new Date(cost.date))}` : ""}${cost.note ? ` · ${escapeHtml(cost.note)}` : ""}</p>
      </div>
      <div class="row-actions">
        <strong>${currency.format(cost.amount)}</strong>
        <button class="delete-button" type="button" data-delete-property-cost="${property.id}:${cost.id}">x</button>
      </div>
    </div>
  `).join("") : emptyStateHtml("Ei vielä lisättyjä kuluja.");
}

function addPropertyPhotosFromDialog(files) {
  const property = state.properties.find((item) => item.id === el.propertyId.value);
  if (!property || !files?.length) return;
  property.photos = Array.isArray(property.photos) ? property.photos : [];
  Array.from(files).forEach((file) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      property.photos.push(reader.result);
      renderPropertyPhotosPanel(property);
      persistState();
    });
    reader.readAsDataURL(file);
  });
  el.propertyPhotos.value = "";
}

function openPropertyPhotoViewer(propertyId, index = 0) {
  const property = state.properties.find((item) => item.id === propertyId);
  const photos = Array.isArray(property?.photos) ? property.photos : [];
  if (!property || !photos.length) return;
  photoViewer = {
    propertyId: property.id,
    index: clampPhotoIndex(index, photos.length),
  };
  renderPropertyPhotoViewer();
  try {
    el.photoViewerDialog.showModal();
  } catch {
    el.photoViewerDialog.show();
  }
  el.nextPhotoBtn.focus();
}

function renderPropertyPhotoViewer() {
  const property = state.properties.find((item) => item.id === photoViewer.propertyId);
  const photos = Array.isArray(property?.photos) ? property.photos : [];
  if (!property || !photos.length) {
    el.photoViewerDialog.close();
    return;
  }
  photoViewer.index = clampPhotoIndex(photoViewer.index, photos.length);
  el.photoViewerImage.src = photos[photoViewer.index];
  el.photoViewerImage.alt = `${property.address || "Kiinteistö"} kuva ${photoViewer.index + 1}`;
  el.photoViewerCaption.textContent = `${property.address || "Kiinteistö"} · ${photoViewer.index + 1} / ${photos.length}`;
  const single = photos.length <= 1;
  el.prevPhotoBtn.disabled = single;
  el.nextPhotoBtn.disabled = single;
}

function movePropertyPhoto(direction) {
  const property = state.properties.find((item) => item.id === photoViewer.propertyId);
  const photos = Array.isArray(property?.photos) ? property.photos : [];
  if (!photos.length) return;
  photoViewer.index = (photoViewer.index + direction + photos.length) % photos.length;
  renderPropertyPhotoViewer();
}

function clampPhotoIndex(index, length) {
  if (!length) return 0;
  return Math.min(Math.max(Number(index) || 0, 0), length - 1);
}

function handlePhotoViewerKeydown(event) {
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    movePropertyPhoto(-1);
  }
  if (event.key === "ArrowRight") {
    event.preventDefault();
    movePropertyPhoto(1);
  }
}

function addCarCostFromForm(form) {
  const car = state.cars.find((item) => item.id === form.dataset.carId);
  if (!car) return;
  const data = new FormData(form);
  const amount = Number(data.get("amount") || 0);
  if (amount <= 0) return;
  car.maintenanceCosts = Array.isArray(car.maintenanceCosts) ? car.maintenanceCosts : [];
  car.maintenanceCosts.push({
    id: crypto.randomUUID(),
    type: data.get("type") || "repair",
    amount,
    date: data.get("date") || new Date().toISOString().slice(0, 10),
    note: String(data.get("note") || "").trim(),
  });
  form.reset();
  saveAndRender();
}

function addCarCostFromDialog() {
  const car = state.cars.find((item) => item.id === el.carId.value);
  if (!car) return;
  const amount = Number(el.carCostAmount.value || 0);
  if (amount <= 0) {
    el.carCostAmount.setCustomValidity("Lisää kulun summa.");
    el.carCostAmount.reportValidity();
    el.carCostAmount.addEventListener("input", () => el.carCostAmount.setCustomValidity(""), { once: true });
    return;
  }
  car.maintenanceCosts = Array.isArray(car.maintenanceCosts) ? car.maintenanceCosts : [];
  car.maintenanceCosts.push({
    id: crypto.randomUUID(),
    type: el.carCostType.value || "repair",
    amount,
    date: el.carCostDate.value || new Date().toISOString().slice(0, 10),
    note: el.carCostNote.value.trim(),
  });
  resetCarCostFields();
  renderCarCostsPanel(car);
  persistState();
  renderSummary();
  renderActiveCards();
}

function resetCarCostFields() {
  el.carCostType.value = "repair";
  el.carCostAmount.value = "";
  el.carCostDate.value = new Date().toISOString().slice(0, 10);
  el.carCostNote.value = "";
}

function renderCarCostsPanel(car) {
  const costs = Array.isArray(car.maintenanceCosts) ? car.maintenanceCosts : [];
  const total = costs.reduce((sum, cost) => sum + Number(cost.amount || 0), 0);
  el.carCostsTotal.textContent = `Ylläpito yhteensä ${currency.format(total)}`;
  el.carCostsList.innerHTML = costs.length ? costs.map((cost) => `
    <div class="car-cost-item">
      <div>
        <strong>${carCostTypeLabel(cost.type)}</strong>
        <p class="muted">${cost.date ? dateFormatForLanguage().format(new Date(cost.date)) : ""}${cost.note ? ` · ${escapeHtml(cost.note)}` : ""}</p>
      </div>
      <div class="row-actions">
        <strong>${currency.format(cost.amount)}</strong>
        <button class="delete-button" type="button" data-delete-car-cost="${car.id}:${cost.id}">x</button>
      </div>
    </div>
  `).join("") : emptyStateHtml("Ei vielä ylläpitokuluja.");
}

function deleteCarCost(payload) {
  const [carId, costId] = String(payload || "").split(":");
  const car = state.cars.find((item) => item.id === carId);
  if (!car) return;
  car.maintenanceCosts = (car.maintenanceCosts || []).filter((cost) => cost.id !== costId);
  if (el.carId.value === car.id && el.carDialog.open) {
    renderCarCostsPanel(car);
    persistState();
    renderActiveCards();
  } else {
    saveAndRender();
  }
}

function deleteById(collection, id) {
  state[collection] = state[collection].filter((item) => item.id !== id);
  saveAndRender();
}

function addPropertyPhotos(propertyId, files) {
  const property = state.properties.find((item) => item.id === propertyId);
  if (!property || !files?.length) return;
  property.photos = Array.isArray(property.photos) ? property.photos : [];
  Array.from(files).forEach((file) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      property.photos.push(reader.result);
      saveAndRender();
    });
    reader.readAsDataURL(file);
  });
}

function savePropertyDetails(propertyId) {
  const property = state.properties.find((item) => item.id === propertyId);
  if (!property) return;
  document.querySelectorAll(`[data-property-id="${propertyId}"]`).forEach((field) => {
    property[field.dataset.propertyField] = field.value;
  });
  saveAndRender();
}

function hydratePropertyDetails() {}

function exportData() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `varallisuussuunnitelma-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

function importData(event) {
  const [file] = event.target.files;
  if (!file) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      Object.assign(state, normalizeState(JSON.parse(reader.result)));
      saveAndRender();
    } catch {
      alert("Tiedoston tuonti ei onnistunut.");
    } finally {
      el.importInput.value = "";
    }
  });
  reader.readAsText(file);
}

function loadState() {
  const current = parseStoredState(storeKey);
  const backup = parseStoredState(backupStoreKey);
  const old = parseStoredState(oldStoreKey);
  const source = current || backup || old;
  if (source) return normalizeState(rescueStoredLayout(source, [backup, old]));
  return defaultState();
}

function parseStoredState(key) {
  const saved = localStorage.getItem(key);
  if (!saved) return null;
  try {
    return JSON.parse(saved);
  } catch {
    localStorage.setItem(`${key}-corrupt-${Date.now()}`, saved);
    return null;
  }
}

function rescueStoredLayout(source, candidates) {
  const sourceHasTabs = Array.isArray(source?.customTabs) && source.customTabs.length > 0;
  const bestTabs = sourceHasTabs
    ? source
    : candidates
      .filter(Boolean)
      .reduce((winner, candidate) => (tabScore(candidate) > tabScore(winner) ? candidate : winner), source);
  const bestHeader = candidates
    .filter(Boolean)
    .reduce((winner, candidate) => (headerScore(candidate) > headerScore(winner) ? candidate : winner), source);
  return {
    ...source,
    customTabs: sourceHasTabs ? source.customTabs : bestTabs.customTabs,
    activeTabId: sourceHasTabs ? source.activeTabId : bestTabs.activeTabId,
    appHeader: headerScore(bestHeader) > headerScore(source) ? bestHeader.appHeader : source.appHeader,
  };
}

function tabScore(value) {
  if (!Array.isArray(value?.customTabs)) return 0;
  return value.customTabs.reduce((score, tab) => score + 1 + (Array.isArray(tab.cards) ? tab.cards.length : 0), 0);
}

function headerScore(value) {
  const header = value?.appHeader || {};
  let score = 0;
  if (typeof header.eyebrow === "string" && header.eyebrow.trim()) score += header.eyebrow === defaultHeader().eyebrow ? 1 : 3;
  if (typeof header.title === "string" && header.title.trim()) score += header.title === defaultHeader().title ? 1 : 3;
  return score;
}

function normalizeState(value) {
  const defaults = defaultState();
  const customTabs = (Array.isArray(value.customTabs) && value.customTabs.length ? value.customTabs : defaults.customTabs)
    .map((tab) => ({ ...tab, cards: (tab.cards || []).filter((card) => card.type !== "profile").map(normalizeCard) }));
  const profiles = Array.isArray(value.profiles) && value.profiles.length ? value.profiles.map(normalizeProfile) : defaults.profiles;
  const activeProfileId = profiles.some((profile) => profile.id === value.activeProfileId) ? value.activeProfileId : profiles[0]?.id || null;
  const active = profiles.find((profile) => profile.id === activeProfileId) || profiles[0];
  const authEmail = profiles.some((profile) => normalizeEmail(profile.email) === normalizeEmail(value.authEmail)) ? normalizeEmail(value.authEmail) : "";
  const normalized = {
    transactions: Array.isArray(value.transactions) ? value.transactions : defaults.transactions,
    financialEvents: Array.isArray(value.financialEvents) ? value.financialEvents.map(normalizeFinancialEvent) : defaults.financialEvents,
    deletedFinancialEvents: Array.isArray(value.deletedFinancialEvents) ? value.deletedFinancialEvents.map(normalizeFinancialEvent) : defaults.deletedFinancialEvents,
    budgets: Array.isArray(value.budgets) ? value.budgets : defaults.budgets,
    goals: Array.isArray(value.goals) ? value.goals : defaults.goals,
    debts: Array.isArray(value.debts) ? value.debts.map(normalizeDebt) : defaults.debts,
    cars: Array.isArray(value.cars) ? value.cars.map(normalizeCar) : defaults.cars,
    assets: Array.isArray(value.assets) ? value.assets.map(normalizeAsset) : defaults.assets.map(normalizeAsset),
    properties: Array.isArray(value.properties) ? value.properties.map(normalizeProperty) : derivePropertiesFromAssets(value.assets || defaults.assets, value.debts || defaults.debts).map(normalizeProperty),
    wealthHistory: Array.isArray(value.wealthHistory) ? value.wealthHistory : defaults.wealthHistory,
    investments: Array.isArray(value.investments) ? value.investments.map(normalizeInvestment) : defaults.investments.map(normalizeInvestment),
    tips: Array.isArray(value.tips) ? value.tips : defaults.tips,
    incomeTypes: Array.isArray(value.incomeTypes) ? value.incomeTypes : defaults.incomeTypes,
    expenseTypes: Array.isArray(value.expenseTypes) ? value.expenseTypes : defaults.expenseTypes,
    chartRanges: value.chartRanges || defaults.chartRanges,
    investmentCalculator: value.investmentCalculator || defaults.investmentCalculator,
    appHeader: normalizeAppHeader(value.appHeader, defaults.appHeader),
    profiles,
    activeProfileId,
    authEmail,
    language: validLanguage(active?.language || value.language || defaults.language),
    currency: validCurrency(active?.currency || value.currency || defaults.currency),
    customTabs,
    activeTabId: customTabs.some((tab) => tab.id === value.activeTabId) ? value.activeTabId : customTabs[0]?.id || null,
  };
  syncCarLoanExpenses(normalized);
  return normalized;
}

function normalizeCard(card) {
  const normalized = { id: card.id || crypto.randomUUID(), type: card.type || "assets" };
  if (card.size && Number(card.size.width) > 0 && Number(card.size.height) > 0) {
    normalized.size = {
      width: Math.max(240, Math.round(Number(card.size.width))),
      height: Math.max(120, Math.round(Number(card.size.height))),
      colSpan: Math.max(1, Math.round(Number(card.size.colSpan || 1))),
    };
  }
  return normalized;
}

function normalizeInvestment(investment) {
  const createdAt = investment.createdAt || localIsoDate();
  const fallbackTarget = new Date(createdAt);
  fallbackTarget.setFullYear(fallbackTarget.getFullYear() + 5);
  return {
    id: investment.id || crypto.randomUUID(),
    name: investment.name || "Sijoitus",
    place: investment.place || "",
    type: ["fund", "stock", "cash", "other"].includes(investment.type) ? investment.type : "fund",
    value: Number(investment.value || 0),
    monthlyContribution: Number(investment.monthlyContribution || 0),
    targetDate: investment.targetDate || localIsoDate(fallbackTarget),
    expectedReturn: Number(investment.expectedReturn || 0),
    goalName: investment.goalName || "",
    goalAmount: Number(investment.goalAmount || 0),
    startValue: Number(investment.startValue ?? investment.value ?? 0),
    createdAt,
  };
}

function normalizeAsset(asset) {
  return {
    id: asset.id || crypto.randomUUID(),
    name: asset.name || "Omaisuuserä",
    place: asset.place || "",
    type: ["savings", "property", "vehicle", "cash", "other"].includes(asset.type) ? asset.type : "other",
    value: Number(asset.value || 0),
    goalName: asset.goalName || "",
    goalAmount: Number(asset.goalAmount || 0),
  };
}

function defaultHeader() {
  return { eyebrow: "Perheen varallisuussuunnitelma", title: "Varallisuus" };
}

function normalizeAppHeader(header, fallback = defaultHeader()) {
  return {
    eyebrow: typeof header?.eyebrow === "string" && header.eyebrow.trim() ? header.eyebrow.trim() : fallback.eyebrow,
    title: typeof header?.title === "string" && header.title.trim() ? header.title.trim() : fallback.title,
  };
}

function normalizeProfile(profile) {
  return {
    id: profile.id || crypto.randomUUID(),
    firstName: profile.firstName || "",
    lastName: profile.lastName || "",
    email: profile.email || "",
    birthday: profile.birthday || "",
    language: validLanguage(profile.language),
    currency: validCurrency(profile.currency),
    children: Array.isArray(profile.children) ? profile.children.map((child) => ({ id: child.id || crypto.randomUUID(), name: child.name || "", birthday: child.birthday || "" })) : [],
    familyMembers: Array.isArray(profile.familyMembers) ? profile.familyMembers.map((member) => ({ id: member.id || crypto.randomUUID(), name: member.name || "", email: member.email || "", role: member.role || "" })) : [],
    avatarEmoji: profile.avatarEmoji || "",
  };
}

function normalizeCar(car) {
  return {
    id: car.id || crypto.randomUUID(),
    plate: car.plate || "",
    brand: car.brand || "",
    model: car.model || "",
    year: Number(car.year || 0),
    purchaseYear: Number(car.purchaseYear || 0),
    purchasePrice: Number(car.purchasePrice || 0),
    currentValue: Number(car.currentValue ?? car.purchasePrice ?? 0),
    loanPrincipal: Number(car.loanPrincipal || 0),
    annualRate: Number(car.annualRate || 0),
    monthlyPayment: Number(car.monthlyPayment || 0),
    debtId: car.debtId || null,
    expenseId: car.expenseId || null,
    maintenanceCosts: Array.isArray(car.maintenanceCosts) ? car.maintenanceCosts.map(normalizeCarCost) : [],
  };
}

function normalizeProperty(property) {
  return {
    id: property.id || crypto.randomUUID(),
    address: property.address || "",
    type: property.type || "other",
    purchasePrice: Number(property.purchasePrice || 0),
    value: Number(property.value || 0),
    loanPrincipal: Number(property.loanPrincipal || 0),
    annualRate: Number(property.annualRate || 0),
    monthlyPayment: Number(property.monthlyPayment || 0),
    monthlyFee: Number(property.monthlyFee || 0),
    monthlyRent: Number(property.monthlyRent || 0),
    notes: property.notes || "",
    tenantFirstName: property.tenantFirstName || "",
    tenantLastName: property.tenantLastName || "",
    tenantId: property.tenantId || "",
    rentReviewDate: property.rentReviewDate || "",
    photos: Array.isArray(property.photos) ? property.photos : [],
    propertyCosts: Array.isArray(property.propertyCosts) ? property.propertyCosts.map(normalizePropertyCost) : [],
    assetId: property.assetId || null,
    debtId: property.debtId || null,
  };
}

function normalizePropertyCost(cost) {
  return {
    id: cost.id || crypto.randomUUID(),
    type: ["fee", "repair", "tax", "insurance", "utility", "other"].includes(cost.type) ? cost.type : "other",
    amount: Number(cost.amount || 0),
    recurrence: cost.recurrence === "oneTime" ? "oneTime" : "monthly",
    date: cost.date || new Date().toISOString().slice(0, 10),
    note: cost.note || "",
  };
}

function normalizeCarCost(cost) {
  return {
    id: cost.id || crypto.randomUUID(),
    type: ["insurance", "repair", "tax", "tires"].includes(cost.type) ? cost.type : "repair",
    amount: Number(cost.amount || 0),
    date: cost.date || new Date().toISOString().slice(0, 10),
    note: cost.note || "",
  };
}

function normalizeDebt(debt) {
  return {
    id: debt.id || crypto.randomUUID(),
    name: debt.name || "Velka",
    principal: Number(debt.principal || 0),
    originalPrincipal: Number(debt.originalPrincipal || debt.principal || 0),
    drawdownDate: debt.drawdownDate || localIsoDate(),
    loanType: normalizeLoanType(debt.loanType),
    annualRate: Number(debt.annualRate || 0),
    monthlyPayment: Number(debt.monthlyPayment || 0),
    originalMonthlyPayment: Number(debt.originalMonthlyPayment || debt.monthlyPayment || 0),
    originalPayoffDate: debt.originalPayoffDate || "",
    notes: debt.notes || "",
  };
}

function normalizeLoanType(type) {
  if (type === "other" || type === "equalPrincipal") return "equalPrincipal";
  return "annuity";
}

function normalizeFinancialEvent(event) {
  const normalized = {
    id: event.id || crypto.randomUUID(),
    action: event.action || "decreaseDebt",
    targetType: event.targetType || "",
    targetId: event.targetId || "",
    targetName: event.targetName || "",
    amount: Number(event.amount || 0),
    date: event.date || new Date().toISOString().slice(0, 10),
    note: event.note || "",
  };
  if (Number.isFinite(Number(event.previousValue))) normalized.previousValue = Number(event.previousValue);
  if (Number.isFinite(Number(event.newValue))) normalized.newValue = Number(event.newValue);
  if (Number.isFinite(Number(event.delta))) normalized.delta = Number(event.delta);
  if (event.deletedAt) normalized.deletedAt = event.deletedAt;
  return normalized;
}

function defaultState() {
  const kotasavuAssetId = crypto.randomUUID();
  const peltoAssetId = crypto.randomUUID();
  const varikkoAssetId = crypto.randomUUID();
  const kotasavuDebtId = crypto.randomUUID();
  const peltoDebtId = crypto.randomUUID();
  const defaultProfile = makeProfile("Antti", "", "", "fi", "EUR");
  const tabs = defaultCustomTabs();
  return {
    transactions: [
      sampleTransaction("Antti palkka", 4200, "income", "Muu", -5, "Antti"),
      sampleTransaction("Veronika palkka", 980, "income", "Muu", -5, "Veronika"),
      sampleTransaction("Ruokabudjetti", 1150, "expense", "Ruoka", -2, "Koko perhe"),
    ],
    financialEvents: [],
    deletedFinancialEvents: [],
    budgets: [
      { id: crypto.randomUUID(), category: "Asuminen", limit: 2706 },
      { id: crypto.randomUUID(), category: "Ruoka", limit: 1150 },
      { id: crypto.randomUUID(), category: "Auto", limit: 765 },
      { id: crypto.randomUUID(), category: "Lapset", limit: 1158 },
      { id: crypto.randomUUID(), category: "Sijoitukset", limit: 260 },
    ],
    goals: [
      { id: crypto.randomUUID(), name: "Säästö lapset", target: 20000, saved: 10320 },
      { id: crypto.randomUUID(), name: "Säästö Veronika", target: 10000, saved: 4000 },
    ],
    assets: [
      { id: kotasavuAssetId, name: "Kotasavuntie", type: "property", value: 260000 },
      { id: peltoAssetId, name: "Pellon pääntie", type: "property", value: 54000 },
      { id: crypto.randomUUID(), name: "Talletus", type: "cash", value: 20000 },
      { id: crypto.randomUUID(), name: "Säästö Veronika", type: "savings", value: 4000 },
      { id: varikkoAssetId, name: "Varikko", type: "property", value: 25000 },
      { id: crypto.randomUUID(), name: "Säästö lapset", type: "savings", value: 10320 },
      { id: crypto.randomUUID(), name: "Säästö rus", type: "savings", value: 600 },
    ],
    debts: [
      { id: kotasavuDebtId, name: "Kotasavuntie 3 laina", principal: 207418, annualRate: 3.8, monthlyPayment: 790, notes: "" },
      { id: peltoDebtId, name: "Pellon pääntie laina", principal: 32161, annualRate: 3.8, monthlyPayment: 190, notes: "" },
      { id: crypto.randomUUID(), name: "Kortti Duo", principal: 9300, annualRate: 12.0, monthlyPayment: 500, notes: "" },
    ],
    cars: [],
    properties: [
      propertySeed("Kotasavuntie 3", "home", 260000, 260000, 207418, 3.8, 790, 0, 0, kotasavuAssetId, kotasavuDebtId),
      propertySeed("Pellon pääntie", "rental", 54000, 54000, 32161, 3.8, 190, 0, 900, peltoAssetId, peltoDebtId),
      propertySeed("Varikko", "other", 25000, 25000, 0, 0, 0, 0, 487, varikkoAssetId, null),
    ],
    wealthHistory: defaultWealthHistory(),
    investments: [{ id: crypto.randomUUID(), name: "Kuukausisijoitus", place: "Nordnet", type: "fund", value: 0, monthlyContribution: 260, targetDate: "", expectedReturn: 5, goalName: "Kuukausisijoituksen tavoite", goalAmount: 20000, startValue: 0, createdAt: localIsoDate() }],
    tips: defaultTips(),
    incomeTypes: [
      { id: crypto.randomUUID(), name: "Antti palkka", amount: 4200 },
      { id: crypto.randomUUID(), name: "Veronika palkka", amount: 980 },
      { id: crypto.randomUUID(), name: "Lapsilisä", amount: 500 },
    ],
    expenseTypes: [
      { id: crypto.randomUUID(), name: "Asuminen", amount: 2706 },
      { id: crypto.randomUUID(), name: "Ruoka", amount: 1150 },
      { id: crypto.randomUUID(), name: "Auto", amount: 765 },
      { id: crypto.randomUUID(), name: "Lapset", amount: 1158 },
      { id: crypto.randomUUID(), name: "Sijoitukset", amount: 260 },
    ],
    chartRanges: { netWorth: "12m" },
    investmentCalculator: { initial: 5000, monthly: 200, annualReturn: 7, years: 20 },
    appHeader: defaultHeader(),
    profiles: [defaultProfile],
    activeProfileId: defaultProfile.id,
    authEmail: "",
    language: "fi",
    currency: "EUR",
    customTabs: tabs,
    activeTabId: tabs[0].id,
  };
}

function defaultCustomTabs() {
  return [
    { id: crypto.randomUUID(), name: "Suunnitelma", cards: [{ id: crypto.randomUUID(), type: "assets" }, { id: crypto.randomUUID(), type: "debts" }] },
    { id: crypto.randomUUID(), name: "Kiinteistöt", cards: [{ id: crypto.randomUUID(), type: "properties" }] },
    { id: crypto.randomUUID(), name: "Sijoitukset", cards: [{ id: crypto.randomUUID(), type: "investments" }] },
  ];
}

function propertySeed(address, type, purchasePrice, value, loanPrincipal, annualRate, monthlyPayment, monthlyFee, monthlyRent, assetId, debtId) {
  return { id: crypto.randomUUID(), address, type, purchasePrice, value, loanPrincipal, annualRate, monthlyPayment, monthlyFee, monthlyRent, notes: "", tenantFirstName: "", tenantLastName: "", tenantId: "", rentReviewDate: "", photos: [], propertyCosts: [], assetId, debtId };
}

function sampleTransaction(description, amount, type, category, daysAgo, member) {
  const date = new Date();
  date.setDate(date.getDate() + daysAgo);
  return makeTransaction(description, amount, type, category, member, date.toISOString().slice(0, 10));
}

function makeTransaction(description, amount, type, category, member, date = new Date().toISOString().slice(0, 10)) {
  return { id: crypto.randomUUID(), description, amount, type, category, member, date };
}

function saveAndRender() {
  syncCarLoanExpenses(state);
  persistState();
  render();
}

// Tallentaa sekä localStorageen (nopea) että Supabaseen (pilvi)
function persistState() {
  // Paikallinen varmuuskopio (toimii offline)
  const previous = parseStoredState(storeKey);
  const backup = parseStoredState(backupStoreKey);
  const bestBackup = betterLayoutState(previous, backup);
  if (bestBackup) localStorage.setItem(backupStoreKey, JSON.stringify(bestBackup));
  localStorage.setItem(storeKey, JSON.stringify(state));
  // Pilvisynkronointi (ei-blokkaava)
  if (SupabaseAuth.isAuthenticated()) {
    SupabaseAuth.saveState(state).catch((err) =>
      console.warn("Pilvisynkronointi epäonnistui:", err)
    );
  }
}

function betterLayoutState(first, second) {
  if (!first) return second || null;
  if (!second) return first;
  return rescueStoredLayout(first, [second]);
}

function populateSelect(select, labels, values = labels) {
  select.innerHTML = "";
  labels.forEach((label, index) => {
    const option = document.createElement("option");
    option.value = values[index];
    option.textContent = label;
    select.append(option);
  });
}

function t(key) {
  return translations[state.language]?.[key] || translations.fi[key] || key;
}

function translatedTabSuggestions() {
  return [t("profileTab"), t("propertyTab"), t("investmentTab"), t("budget"), t("debts"), t("goals"), "Lapset", "Autot", t("tips")];
}

function activeProfile() {
  return state.profiles.find((profile) => profile.id === state.activeProfileId) || state.profiles[0];
}

function profileByEmail(email) {
  const normalized = normalizeEmail(email);
  return state.profiles.find((profile) => normalizeEmail(profile.email) === normalized);
}

function normalizeEmail(email) {
  return String(email || "").trim().toLowerCase();
}

function applyActiveProfileSettings() {
  const profile = activeProfile();
  if (!profile) return;
  state.language = validLanguage(profile.language);
  state.currency = validCurrency(profile.currency);
}

function makeProfile(firstName = "Antti", lastName = "", birthday = "", language = "fi", currency = "EUR", email = "") {
  return { id: crypto.randomUUID(), firstName, lastName, email, birthday, language: validLanguage(language), currency: validCurrency(currency), children: [], familyMembers: [] };
}

function profileFullName(profile) {
  const name = `${profile.firstName || ""} ${profile.lastName || ""}`.trim();
  return name || t("profile");
}

function registrationStatus(profile) {
  const registered = Boolean(profile?.email && profileByEmail(profile.email));
  if (state.language === "en") return registered ? "Registered" : "Not registered";
  if (state.language === "ru") return registered ? "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d" : "\u041d\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d";
  return registered ? "Rekisteröity" : "Ei rekisteröity";
}

function profileInitials(profile) {
  if (!profile) return "P";
  const first = (profile.firstName || "").trim()[0] || "";
  const last = (profile.lastName || "").trim()[0] || "";
  return `${first}${last}`.toUpperCase() || "P";
}

function validLanguage(value) {
  return languageOptions[value] ? value : "fi";
}

function validCurrency(value) {
  return currencyOptions[value] ? value : "EUR";
}

function dateFormatForLanguage() {
  return new Intl.DateTimeFormat(languageOptions[state.language]?.locale || "fi-FI", { day: "numeric", month: "numeric", year: "numeric" });
}

function totalAssets() {
  return state.assets.reduce((total, asset) => total + Number(asset.value || 0), 0)
    + state.investments.reduce((total, investment) => total + Number(investment.value || 0), 0)
    + state.cars.reduce((total, car) => total + Number(car.currentValue || 0), 0);
}

function totalInvestments() {
  return state.investments.reduce((total, investment) => total + Number(investment.value || 0), 0);
}

function totalDebts() {
  return state.debts.reduce((total, debt) => total + Number(debt.principal || 0), 0);
}

function currentMonthNetWorthGrowth(currentNetWorth = totalAssets() - totalDebts()) {
  const now = new Date();
  const firstOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const history = [...(state.wealthHistory || [])]
    .filter((item) => validIsoDate(item.date))
    .sort((a, b) => new Date(a.date) - new Date(b.date));
  const monthStartPoint = [...history].reverse().find((item) => new Date(item.date) <= firstOfMonth) || history[0];
  return currentNetWorth - Number(monthStartPoint?.value || currentNetWorth);
}

function monthlySavingsRate() {
  const income = state.incomeTypes.reduce((total, item) => total + Number(item.amount || 0), 0) + rentalCashflowTotal();
  const expenses = state.expenseTypes.reduce((total, item) => total + Number(item.amount || 0), 0) + investmentMonthlyExpenseTotal();
  if (income <= 0) return 0;
  return Math.max(0, ((income - expenses) * 100) / income);
}

function familyGoalProgress() {
  const goals = goalSourceItems();
  const target = goals.reduce((total, goal) => total + Number(goal.target || 0), 0);
  const saved = goals.reduce((total, goal) => total + Number(goal.saved || 0), 0);
  return target > 0 ? Math.min(100, (saved * 100) / target) : 0;
}

function rentalCashflowTotal() {
  return state.properties
    .filter((property) => property.type === "rental" || Number(property.monthlyRent || 0) > 0)
    .reduce((total, property) => {
      const linkedDebt = state.debts.find((debt) => debt.id === property.debtId);
      const loanPayment = linkedDebt ? Number(linkedDebt.monthlyPayment || 0) : Number(property.monthlyPayment || 0);
      return total + propertyCashflow(property, loanPayment);
    }, 0);
}

function derivePropertiesFromAssets(assets, debts = []) {
  if (!Array.isArray(assets)) return [];
  return assets.filter((asset) => asset.type === "property").map((asset) => {
    const firstWord = asset.name.toLowerCase().split(" ")[0];
    const debt = debts.find((item) => item.name.toLowerCase().includes(firstWord));
    return propertySeed(asset.name, "other", Number(asset.value || 0), Number(asset.value || 0), Number(debt?.principal || 0), Number(debt?.annualRate || 0), Number(debt?.monthlyPayment || 0), 0, 0, asset.id, debt?.id || null);
  });
}

function propertyCashflow(property, loanPayment = property.monthlyPayment) {
  return propertyNetRent(property) - Number(loanPayment || 0);
}

function propertyNetRent(property) {
  return Number(property.monthlyRent || 0) - Number(property.monthlyFee || 0) - propertyMonthlyCostTotal(property);
}

function propertyMonthlyCostTotal(property) {
  return (property.propertyCosts || [])
    .filter((cost) => cost.recurrence === "monthly")
    .reduce((total, cost) => total + Number(cost.amount || 0), 0);
}

function propertyCostTotal(property) {
  return (property.propertyCosts || []).reduce((total, cost) => total + Number(cost.amount || 0), 0);
}

function propertyCostTypeLabel(type) {
  const labels = {
    fee: "Vastike",
    repair: "Remontti",
    tax: "Vero",
    insurance: "Vakuutus",
    utility: "Sähkö/vesi",
    other: "Muu",
  };
  return labels[type] || "Muu";
}

function propertyYield(property, netRent) {
  const value = Number(property.value || 0);
  return value ? (Number(netRent || 0) * 12 * 100) / value : 0;
}

function forecastDebt(debt) {
  let balance = Number(debt.principal || 0);
  const payment = Number(debt.monthlyPayment || 0);
  const monthlyRate = Number(debt.annualRate || 0) / 100 / 12;
  let months = 0;
  let totalInterest = 0;
  if (balance <= 0 || payment <= 0) return { payoffDate: null, months: 0, totalInterest: 0 };
  if (monthlyRate > 0 && payment <= balance * monthlyRate) return { payoffDate: null, months: 0, totalInterest: 0 };
  while (balance > 0.01 && months < 1200) {
    const interest = balance * monthlyRate;
    totalInterest += interest;
    balance = balance + interest - payment;
    months += 1;
  }
  if (months >= 1200) return { payoffDate: null, months: 0, totalInterest: 0 };
  const payoff = new Date();
  payoff.setMonth(payoff.getMonth() + months);
  return { payoffDate: new Intl.DateTimeFormat("fi-FI", { month: "long", year: "numeric" }).format(payoff), months, totalInterest };
}

function defaultWealthHistory() {
  return [
    { date: "2025-12-01", label: "joulu", value: 134499 },
    { date: "2026-01-01", label: "tammi", value: 121330 },
    { date: "2026-02-01", label: "helmi", value: 118530 },
    { date: "2026-03-01", label: "maalis", value: 119730 },
    { date: "2026-04-01", label: "huhti", value: 120930 },
    { date: "2026-05-01", label: "touko", value: 120098 },
    { date: "2026-06-01", label: "kesä", value: 121281 },
    { date: "2026-07-01", label: "heinä", value: 125841 },
    { date: "2026-08-01", label: "elo", value: 133301 },
    { date: "2026-09-01", label: "syys", value: 134861 },
    { date: "2026-10-01", label: "loka", value: 136421 },
    { date: "2026-11-01", label: "marras", value: 137981 },
  ];
}

function defaultTips() {
  return [
    { id: crypto.randomUUID(), title: "Kilpailuta vakuutukset ja sähkösopimus", impact: 100, note: "Tarkista koti-, auto- ja henkilövakuutukset sekä sähkösopimus kerran vuodessa.", done: false },
    { id: crypto.randomUUID(), title: "Ohjaa kuukauden ylijäämä heti", impact: 280, note: "Kohdista sovittu summa suoraan säästöihin tai velan lyhennykseen.", done: false },
    { id: crypto.randomUUID(), title: "Tarkista vuokrien taso vuosittain", impact: 50, note: "Merkitse vuokratarkastuksen päivämäärä kiinteistön tietoihin.", done: false },
  ];
}

function linkedDebtValue(property, key, fallback) {
  const debt = state.debts.find((item) => item.id === property.debtId);
  return debt ? Number(debt[key] || 0) : Number(fallback || 0);
}

function promptNumber(label, currentValue) {
  const value = prompt(label, String(Number(currentValue || 0)));
  if (value === null) return null;
  const parsed = Number(value.replace(",", "."));
  return Number.isFinite(parsed) ? parsed : Number(currentValue || 0);
}

function sum(items) {
  return items.reduce((total, item) => total + Number(item.amount || 0), 0);
}

function monthKey(date) {
  return date.toISOString().slice(0, 7);
}

function cardTitle(type) {
  return t(type);
}

function cardSubtitle(type) {
  return type === "profile" ? t("profileSubtitle") : "";
}

function assetTypeLabel(type) {
  return { savings: "Säästö", property: "Kiinteistö", vehicle: "Ajoneuvo", cash: "Talletus", other: "Muu" }[type] || "Muu";
}

function propertyTypeLabel(type) {
  return { home: "Oma koti", rental: "Vuokrakohde", cottage: "Vapaa-ajan asunto", other: "Muu" }[type] || "Muu";
}

function investmentTypeLabel(type) {
  return { fund: "Rahasto", stock: "Osake", cash: "Käteinen", other: "Muu" }[type] || "Muu";
}

function loanTypeLabel(type) {
  return normalizeLoanType(type) === "equalPrincipal" ? "Tasalyhennys" : "Annuiteetti";
}

function formatPercent(value) {
  return `${new Intl.NumberFormat(languageOptions[state.language]?.locale || "fi-FI", { maximumFractionDigits: 2 }).format(value)} %`;
}

function emptyState(text) {
  const div = document.createElement("div");
  div.className = "empty-state";
  div.textContent = text;
  return div;
}

function emptyStateHtml(text) {
  return `<div class="empty-state">${escapeHtml(text)}</div>`;
}

function escapeHtml(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}



