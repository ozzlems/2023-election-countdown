const countdown = () => {
    const countDate = new Date('May 14, 2023 00:00:00').getTime();  //getTime() renders the time into miliseconds
    const now = new Date().getTime();
    const gap = countDate - now;
}