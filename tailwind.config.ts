import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				tertiary: {
					DEFAULT: 'hsl(var(--tertiary))',
					foreground: 'hsl(var(--tertiary-foreground))'
				},
				sky: {
					DEFAULT: 'hsl(var(--sky))',
					foreground: 'hsl(var(--sky-foreground))'
				},
				// Pride rainbow colors
				pride: {
					red: 'hsl(var(--pride-red))',
					orange: 'hsl(var(--pride-orange))',
					yellow: 'hsl(var(--pride-yellow))',
					green: 'hsl(var(--pride-green))',
					blue: 'hsl(var(--pride-blue))',
					indigo: 'hsl(var(--pride-indigo))',
					violet: 'hsl(var(--pride-violet))'
				},
				// Voice interaction colors
				voice: {
					listening: 'hsl(var(--voice-listening))',
					pulse: 'hsl(var(--voice-pulse))',
					ripple: 'hsl(var(--voice-ripple))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'typing': {
					'0%, 60%': { opacity: '1' },
					'30%': { opacity: '0.4' },
				},
				'gentle-bounce': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-8px)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'25%': { transform: 'translateY(-5px) rotate(1deg)' },
					'75%': { transform: 'translateY(-3px) rotate(-1deg)' }
				},
				'glow': {
					'from': { boxShadow: '0 4px 20px hsl(var(--primary) / 0.15)' },
					'to': { boxShadow: '0 0 30px hsl(var(--primary-glow) / 0.4)' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-up': {
					'0%': { opacity: '0', transform: 'translateY(40px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'pride-pulse': {
					'0%, 100%': { 
						transform: 'scale(1)',
						opacity: '0.7'
					},
					'50%': { 
						transform: 'scale(1.05)',
						opacity: '1'
					}
				},
				'voice-ripple': {
					'0%': { 
						transform: 'scale(1)',
						opacity: '1'
					},
					'100%': { 
						transform: 'scale(1.4)',
						opacity: '0'
					}
				},
				'rainbow-flow': {
					'0%, 100%': { 
						filter: 'hue-rotate(0deg)'
					},
					'33%': { 
						filter: 'hue-rotate(120deg)'
					},
					'66%': { 
						filter: 'hue-rotate(240deg)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'typing': 'typing 1.5s ease-in-out infinite',
				'gentle-bounce': 'gentle-bounce 3s ease-in-out infinite',
				'float': 'float 4s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite alternate',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-up': 'slide-up 0.8s ease-out',
				'pride-pulse': 'pride-pulse 2s ease-in-out infinite',
				'voice-ripple': 'voice-ripple 1.5s ease-out infinite',
				'rainbow-flow': 'rainbow-flow 3s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
