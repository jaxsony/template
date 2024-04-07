import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const GoogleCaptcha: React.FC = () => {

    const SCRIPT_ID = 'recaptcha-script';
    const { ENABLE_RECAPTCHA, RECAPTCHA_SITE_KEY } = useSelector((state: any) => state.settings.settings)
    const [isMounted, setIsMounted] = useState<boolean>(false)


    /**
     * App mounted hook
     */
    useEffect(() => {
        setIsMounted(true);
        return () => {
            if (isMounted) {
                removeReCaptcha();
            }
        };
    }, [isMounted]);

    useEffect(() => {
        if (ENABLE_RECAPTCHA) {
            const script = document.getElementById(SCRIPT_ID);
            if (!script) {
                loadReCaptcha();
            }
        }
    }, [ENABLE_RECAPTCHA])

    /**
     * Load the captcha sdk
     */
    const loadReCaptcha = () => {
        const script = document.createElement('script')
        script.src = `https://www.recaptcha.net/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`
        script.id = SCRIPT_ID;
        script.async = true;
        document.body.appendChild(script);
    }

    /**
     * Remove captcha and badge on unload 
     */
    const removeReCaptcha = () => {
        const script = document.getElementById(SCRIPT_ID);
        if (script) {
            script.remove();
            const reCaptchaElements: HTMLCollection = document.getElementsByClassName('grecaptcha-badge');
            if (reCaptchaElements.length) {
                reCaptchaElements[0].remove();
            }
        }

    }

    return (<React.Fragment></React.Fragment>)
}
export default GoogleCaptcha;