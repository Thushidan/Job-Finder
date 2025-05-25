const useNowDate = () => {
    const today = new Date();
    const posted_date = `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear()}`;

    return posted_date;
}

export default useNowDate;