import '../assets/css/_variables.scss'; // Import the CSS file

export const CODE_2FA_MIN_LENGTH = 6;
export const PASSWORD_MIN_CHAR = 8;

export const GOOGLE_CAPTCHA_RESPONSE_KEY = "g-recaptcha-response";
export const REFRESH_TOKEN = "refresh_token";

export const DELETE_CONFIRMATION: any = {
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "var(--primary)",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
}

export const CHANGE_CONFIRMATION: any = {
    title: "Please confirm",
    text: "Are you sure to change the status of user?",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "var(--primary)",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes",
    cancelButtonText: "No",
}

export const ALLOWED_IMAGE_TYPES = ['image/png', 'image/jpeg', 'image/jpg'];
export const MAX_FILE_SIZE_IN_BYTES = 1024 * 1024 * 2; // 1MB