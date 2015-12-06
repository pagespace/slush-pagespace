slush-pagespace
==============

> A [slush](http://slushjs.github.io) generator for [Pagespace](http://pagespace.io)

## Installation

Install `slush-pagespace` globally:

```bash
npm install -g slush-pagespace
```

Remember to install `slush` globally as well, if you haven't already:

```bash
npm install -g slush
```

## Usage

Create a new directory for your project:

```bash
mkdir new-pagespace-site
```

Run the generator from within the new directory:

```bash
cd new-pagespace-site

slush pagespace
```

You will now be prompted to give your new Pagespace site name.

### Project structure

The following projecct structure will be generated

```
new-pagespace-site/
├── .gitignore
├── README.md
├── package.json
├── app.js                    # Express app setup  
├── bin
│   └── www                   # Script to start the HTTP server (npm start)
└── theme                     # Customize templates and public assets in this directory    
    ├── templates    
    │   └── main.hbs          # Starter template  
    └── assets
        ├── css
        │   └── styles.js     # Start CSS. Use your preferred CSS structure or preprocesser     
        └── favicon.ico                        
```

### Development

Run `npm start` to start your Pagespace server, then go to [http://localhost:3000](http://localhost:3000). Customize
the port in `bin/www`

The Pagespace middleware configuration in `app.js` is for simple local development. More advanced configuration 
is also available which more suitable for other setups such as production.