import { useTranslation } from 'react-i18next';

const languages = [
  {
    id: 'en',
    title: 'English',
    flag: 'us'
  },
  {
    id: 'tr',
    title: 'Turkish',
    flag: 'tr'
  }
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lng) => i18n.changeLanguage(lng);

  return (
    <>
      {languages.map((lng) => (
        <div
          className="flex items-center cursor-pointer"
          key={lng.id}
          onClick={() => handleLanguageChange(lng.id)}>
          <img className="w-14 object-cover mr-2" src={`/assets/flags/${lng.flag}.png`} />
          <div>{lng.title}</div>
        </div>
      ))}
    </>
  );
};

export default LanguageSwitcher;
