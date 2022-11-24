const TEAMS = {
    teams: {
        netherlands: {
            id: 'netherlands',
            title: 'Netherlands',
            flag: 'https://ssl.gstatic.com/onebox/media/sports/logos/8GEqzfLegwFFpe6X2BODTg_48x48.png'
        },
        ecuador: {
            id: 'ecuador',
            title: 'Ecuador',
            flag: 'https://ssl.gstatic.com/onebox/media/sports/logos/AKqvkBpIyr-iLOK7Ig7-yQ_48x48.png'
        },
        senegal: {
            id: 'senegal',
            title: 'Senegal',
            flag: 'https://ssl.gstatic.com/onebox/media/sports/logos/zw3ac5sIbH4DS6zP5auOkQ_48x48.png'
        },
        qatar: {
            id: 'qatar',
            title: 'Qatar',
            flag: 'https://ssl.gstatic.com/onebox/media/sports/logos/h0FNA5YxLzWChHS5K0o4gw_48x48.png'
        },
        england: {
            id: 'england',
            title: 'England',
            flag: 'https://ssl.gstatic.com/onebox/media/sports/logos/DTqIL8Ba3KIuxGkpXw5ayA_48x48.png'
        },
        iran: {
            id: 'iran',
            title: 'Iran',
            flag: 'https://ssl.gstatic.com/onebox/media/sports/logos/1oq8Fy7ETpBpZNaCA22ArQ_48x48.png'
        },
        usa: {
            id: 'usa',
            title: 'USA',
            flag: 'https://ssl.gstatic.com/onebox/media/sports/logos/wj9uZvn_vZrelLFGH8fnPA_48x48.png'
        },
        wales: {
            id: 'wales',
            title: 'wales',
            flag: 'https://ssl.gstatic.com/onebox/media/sports/logos/1JjnDm6Es30LryHzbudyEw_48x48.png'
        },
        argentina: {
            id: 'argentina',
            title: 'Argentina',
            flag: 'https://ssl.gstatic.com/onebox/media/sports/logos/1xBWyjjkA6vEWopPK3lIPA_48x48.png'
        },
        mexico: {
            id: 'mexico',
            title: 'Mexico',
            flag: 'https://ssl.gstatic.com/onebox/media/sports/logos/yJF9xqmUGenD8108FJbg9A_48x48.png'
        },
        poland: {
            id: 'poland',
            title: 'Poland',
            flag: 'https://ssl.gstatic.com/onebox/media/sports/logos/yTS_Piy3M1wUBnqU0n5aAw_48x48.png'
        },
        ksa: {
            id: 'ksa',
            title: 'Saudi Arabic',
            flag: 'https://ssl.gstatic.com/onebox/media/sports/logos/QoAJxO46fHid3_T-7nRZ0Q_48x48.png'
        },
        australia: {
            id: 'australia',
            title: 'Australia',
            flag: 'https://ssl.gstatic.com/onebox/media/sports/logos/jSgw5z0EPOLzdUi-Aomq7Q_48x48.png'
        },
        denmark: {
            id: 'denmark',
            title: 'Denmark',
            flag: 'https://ssl.gstatic.com/onebox/media/sports/logos/LaOvu-pyRqRso6uzff55XA_48x48.png'
        },
        france: {
            id: 'france',
            title: 'France',
            flag: 'https://ssl.gstatic.com/onebox/media/sports/logos/z3JEQB3coEAGLCJBEUzQ2A_48x48.png'
        },
        tunisia: {
            id: 'tunisia',
            title: 'Tunisia',
            flag: 'https://ssl.gstatic.com/onebox/media/sports/logos/Xs33c9XVUJBX0IkeFn_bIw_48x48.png'
        },
        costa_rica: {
            id: 'costa_rica',
            title: 'Costa Rica',
            flag: 'https://ssl.gstatic.com/onebox/media/sports/logos/ixZiM5pj2IvvYc15k-zfeQ_48x48.png'
        },
        germany: {
            id: 'germany',
            title: 'Germany',
            flag: 'https://ssl.gstatic.com/onebox/media/sports/logos/h1FhPLmDg9AHXzhygqvVPg_48x48.png'
        },
        japan: {
            id: 'japan',
            title: 'Japan',
            flag: 'https://ssl.gstatic.com/onebox/media/sports/logos/by4OltvtZz7taxuQtkiP3A_48x48.png'
        },
        spain: {
            id: 'spain',
            title: 'Spain',
            flag: 'https://ssl.gstatic.com/onebox/media/sports/logos/5hLkf7KFHhmpaiOJQv8LmA_48x48.png'
        },
        belgium: {
            id: 'belgium',
            title: 'Belgium',
            flag: 'https://ssl.gstatic.com/onebox/media/sports/logos/6SF7yEoB60bU5knw-M7R5Q_48x48.png'
        },
        canada: {
            id: 'canada',
            title: 'Canada',
            flag: 'https://ssl.gstatic.com/onebox/media/sports/logos/H23oIEP6qK-zNc3O8abnIA_48x48.png'    
        },
        croatia: {
            id: 'croatia',
            title: 'Croatia',
            flag: 'https://ssl.gstatic.com/onebox/media/sports/logos/9toerdOg8xW4CRhDaZxsyw_48x48.png'
        },
        morocoo: {
            id: 'morocoo',
            title: 'Morocoo',
            flag: 'https://ssl.gstatic.com/onebox/media/sports/logos/I3gt2Ew39ux3GGdZ-4JE3g_48x48.png'
        },
        brazil: {
            id: 'brazil',
            title: 'Brazil',
            flag: 'https://ssl.gstatic.com/onebox/media/sports/logos/zKLzoJVYz0bb6oAnPUdwWQ_48x48.png'
        },
        cameroon: {
            id: 'cameroon',
            title: 'Cameroon',
            flag: 'https://ssl.gstatic.com/onebox/media/sports/logos/fmHyTSbJ-cYbY6WJzvqaZQ_48x48.png'
        },
        serbia: {
            id: 'serbia',
            title: 'Serbia',
            flag: 'https://ssl.gstatic.com/onebox/media/sports/logos/xyh1vmZ-xJH2iJCKjqS1Ow_48x48.png'
        },
        switzerland: {
            id: 'switzerland',
            title: 'Switzerland',
            flag: 'https://ssl.gstatic.com/onebox/media/sports/logos/1hy9ek4dOIffYULM6k1fqg_48x48.png'
        },
        ghana: {
            id: 'ghana',
            title: 'Ghana',
            flag: 'https://ssl.gstatic.com/onebox/media/sports/logos/VJQ1emg0TOubjGnap4vWuw_48x48.png'
        },
        south_korea: {
            id: 'south_korea',
            title: 'South Korea',
            flag: 'https://ssl.gstatic.com/onebox/media/sports/logos/Uu5pwNmMHGd5bCooKrS3Lw_48x48.png'
        },
        portugal: {
            id: 'portugal',
            title: 'Portugal',
            flag: 'https://ssl.gstatic.com/onebox/media/sports/logos/HJ3_2c4w791nZJj7n-Lj3Q_48x48.png'
        },
        uruguay: {
            id: 'uruguay',
            title: 'Uruguay',
            flag: 'https://ssl.gstatic.com/onebox/media/sports/logos/KnSUdQWiGRoy89q4x85IgA_48x48.png'
        }
    }
}


window.addEventListener("DOMContentLoaded", () => {

    if(localStorage.getItem('297c083672af6147308b87ac5bd57b383dfb8617b75cad8342184ee003ca917c') == null) {
        localStorage.setItem(
            '297c083672af6147308b87ac5bd57b383dfb8617b75cad8342184ee003ca917c', JSON.stringify(TEAMS)
        );
    }

});