import styles from './InstallGuide.module.scss';


interface InstallGuideDesktopProps {
    selected: number
}


export function InstallGuide({selected}: InstallGuideDesktopProps) {
    return(
        <div className={styles.installGuide}>
            <div className={styles.installGuideItem}>
                <div className={styles.installGuideItemImage}>
                    <img width='100%' src={selected === 0 ? "/install/ruStoreInstall1.png" : "/install/manualInstall1.png"} alt=""/>
                </div>
                <p className={styles.installGuideItemText1}>
                    {
                        selected === 0 ?
                            "Установите из магазина приложений вашего телевизора браузер, поддерживающий скачивание файлов, например, браузер Browser" :
                            "Скачайте с нашего сайта установочный APK файл и перенесите его на флешку"
                    }
                </p>
                <div className={styles.installGuideItemNumber}>
                    1
                </div>
            </div>
            <div className={styles.installGuideItem}>
                <div className={styles.installGuideItemImage}>
                    <img width='100%' src={selected === 0 ? "/install/ruStoreInstall2.png" : "/install/manualInstall2.png"} alt=""/>
                </div>
                <p className={styles.installGuideItemText1}>
                    {selected === 0 ? (
                        <>
                            Откройте в браузере вашего телевизора эту страницу (
                            <a href="https://tvzvezda.ru/sp/smart" className={styles.installGuideItemText1Link}>tvzvezda.ru/sp/smart</a>
                            ) и нажмите кнопку «Скачать приложение»
                        </>
                    ) : (
                        "Установите на вашем устройстве любой файловый менеджер"
                    )}
                </p>
                <p className={styles.installGuideItemText2}>

                    {
                        selected === 0 ?
                            "Если браузер вашего телевизора блокирует скачивание APK, установите сторонний браузер, поддерживающий скачивание файлов – смотрите пункт 1" :
                            "В качестве примера файлового менеджера можно использовать File Manager, Cx File Explorer, Mi Проводник"
                    }
                </p>
                <div className={styles.installGuideItemNumber}>
                    2
                </div>
            </div>
            <div className={styles.installGuideItem}>
                <div className={styles.installGuideItemImage}>
                    <img width='100%' src={selected === 0 ? "/install/ruStoreInstall3.png" : "/install/manualInstall3.png"} alt=""/>
                </div>
                <p className={styles.installGuideItemText1}>
                    {
                        selected === 0 ?
                            "После завершения скачивания файла APK на ваш телевизор, откройте установочный файл" :
                            "Вставьте флешку в ваш телевизор и откройте APK-файл при помощи установленного файлового менеджера"
                    }
                </p>
                {selected === 0 && (
                    <p className={styles.installGuideItemText2}>
                        Если файл не открылся автоматически, найдите его в «Загрузках» браузера и откройте
                    </p>
                )}
                <div className={styles.installGuideItemNumber}>
                    3
                </div>
            </div>
            <div className={styles.installGuideItem}>
                <div className={styles.installGuideItemImage}>
                    <img width='100%' src={selected === 0 ? "/install/ruStoreInstall4.png" : "/install/manualInstall4.png"} alt=""/>
                </div>
                <p className={styles.installGuideItemText1}>
                    {
                        selected === 0 ?
                            "Нажмите кнопку «Установить», а затем, после установки приложения, закройте браузер и откройте приложение «Звезда»" :
                            "Нажмите кнопку «Установить», а затем, после установки приложения, закройте файловый менеджер и откройте приложение «Звезда»"
                    }
                </p>
                <div className={styles.installGuideItemNumber}>
                    4
                </div>
            </div>
        </div>
    )
}