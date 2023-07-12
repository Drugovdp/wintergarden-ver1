export const RepeatingStyles = {
    width: '98%',
    margin: '0 auto',

    font: {
        fontStyle: 'normal',
        fontWeight: 500
    },

    MapHeader: {
        '.headerMap': {
            display: 'flex',
            gap: '8px',
            width: '200px',
            height: '30px'
        },
        '.headerMapLogo': {
            width: '28px',
            height: '28px',
            background: '#ffffff',
            'border-radius': '50%',
            'box-shadow': '0px 0px 5px rgba(0, 0, 0, 0.1)'
        },
        '.headerMapLogoTitle': {},
        'p': {
            'font-size': '13px',
            'line-height': '15px'
        },
        'a': {
            color: '#3fac3b',
            'font-weight': 500,
            'font-size': '11px',
            'line-height': '13px',
            'text-decoration-line': 'underline'
        },
        '.headerMessenger': {
            width: '138px',
            height: '44px'
        },
        '.headerMessengerTitle': {
            'font-size': '10px',
            'line-height': '12px',
            color: ' #969696'
        },
        '.headerMessengerLogo': {
            display: 'flex',
            'justify-content': 'space-between',
            'margin-top': '2px'
        },
        'img': {
            width: '28px'
        },
        '.headerContact': {
            height: '32px',
            color: '#282828'
        },
        '.headerContactPulsatingPoint': {
            display: 'flex',
            gap: '4px',
            'justify-content': 'space-between',
            'align-items': 'center'
        },
        '.headerContactPulsatingPointEllipse': {
            width: '5px',
            height: '5px',
            'border-radius': '50%',
            'background-color': '#00af47',
            animation: 'Pulsating 1s linear infinite'
        },
        '@keyframes Pulsating': {
            from: {
                'background-color': 'rgba(0, 175, 71, 1)'
            },
            '50%': {
                'background-color': 'rgba(0, 175, 71, 0.6)'
            },
            to: {
                'background-color': 'rgba(0, 175, 71, 0.3)'
            }
        },
        '.headerContactPulsatingPointTitle': {
            'font-size': '10px'
        },
        '.headerContactTelefon': {
            'font-weight': 700,
            'font-size': '15px',
            'line-height': '18px'
        }
    }
}