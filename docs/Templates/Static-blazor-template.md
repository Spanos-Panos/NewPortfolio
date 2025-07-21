# Simple Blazor WebAssembly Template

This template creates a clean, minimal Blazor WebAssembly project with Tailwind CSS. It includes a basic navbar, hero section, and two customizable sections that you can easily modify, add, or remove based on your needs. Perfect for creating any type of website - business, service company, restaurant, portfolio, landing page, etc.

## Project Structure

```
ProjectName/
├── Layout/
│   ├── MainLayout.razor
│   └── NavMenu.razor
├── Pages/
│   └── Home.razor
├── Properties/
│   └── launchSettings.json
├── Shared/
│   ├── Hero.razor
│   ├── CustomSection1.razor
│   ├── CustomSection2.razor
│   └── Contact.razor
├── wwwroot/
│   ├── index.html
│   └── Assets/
│       ├── css/
│       │   ├── app.css
│       │   ├── global.css
│       │   ├── MainLayout.css
│       │   ├── NavMenu.css
│       │   ├── Hero.css
│       │   ├── CustomSection1.css
│       │   ├── CustomSection2.css
│       │   └── Contact.css
│       └── js/
│           └── navigation.js
├── _Imports.razor
├── App.razor
├── Program.cs
├── ProjectName.csproj
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── tailwind.css
```

## Setup Instructions

### 1. Create New Blazor WebAssembly Project

```bash
dotnet new blazorwasm -n [ProjectName] --no-https
cd [ProjectName]

# Remove default sample data folder
Remove-Item -Recurse -Force "SampleData" -ErrorAction SilentlyContinue
```

### 2. Update Project File

Replace the contents of `[ProjectName].csproj`:

```xml
<Project Sdk="Microsoft.NET.Sdk.BlazorWebAssembly">

  <PropertyGroup>
    <TargetFramework>net9.0</TargetFramework>
    <Nullable>enable</Nullable>
    <ImplicitUsings>enable</ImplicitUsings>
  </PropertyGroup>

  <ItemGroup>
    <PackageReference Include="Microsoft.AspNetCore.Components.WebAssembly" Version="9.0.1" />
    <PackageReference Include="Microsoft.AspNetCore.Components.WebAssembly.DevServer" Version="9.0.1" PrivateAssets="all" />
  </ItemGroup>

</Project>
```

### 3. Setup Tailwind CSS

Create `package.json`:

```json
{
  "name": "portfolio",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "build-css": "tailwindcss -i ./tailwind.css -o ./wwwroot/tailwind.css --watch",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "devDependencies": {
    "@tailwindcss/forms": "^0.5.10",
    "@tailwindcss/typography": "^0.5.16",
    "autoprefixer": "^10.4.21",
    "postcss": "^8.5.6",
    "postcss-cli": "^11.0.1",
    "tailwindcss": "^3.4.17"
  }
}
```

Create `tailwind.config.js`:

```javascript
module.exports = {
  content: [
    './**/*.{razor,html,cshtml}',
    './wwwroot/index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
```

Create `postcss.config.js`:

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

Create `tailwind.css` (root level):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 4. Install Dependencies

```bash
npm install
npm run build-css
```

### 5. Create Directory Structure

Create the required directories:
```bash
# Create Assets directories
New-Item -ItemType Directory -Path "wwwroot\Assets\css" -Force
New-Item -ItemType Directory -Path "wwwroot\Assets\js" -Force

# Remove unnecessary files/folders if they exist
Remove-Item -Recurse -Force "SampleData" -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force "wwwroot\sample-data" -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force "wwwroot\css" -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force "wwwroot\lib" -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force "Layout\*.css" -ErrorAction SilentlyContinue
Remove-Item -Path "wwwroot\*.png" -ErrorAction SilentlyContinue
Remove-Item -Path "wwwroot\*.ico" -ErrorAction SilentlyContinue
```

## File Contents

### Core Files

#### `Program.cs`

```csharp
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using [ProjectName];

var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");

builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });

await builder.Build().RunAsync();
```

#### `App.razor`

```aspnetcorerazor
<Router AppAssembly="@typeof(App).Assembly">
    <Found Context="routeData">
        <RouteView RouteData="@routeData" DefaultLayout="@typeof(Layout.MainLayout)" />
    </Found>
    <NotFound>
        <PageTitle>Not found</PageTitle>
        <LayoutView Layout="@typeof(Layout.MainLayout)">
            <p class="text-center text-xl mt-10">Sorry, there's nothing at this address.</p>
        </LayoutView>
    </NotFound>
</Router>
```

#### `_Imports.razor`

```aspnetcorerazor
@using System.Net.Http
@using System.Net.Http.Json
@using Microsoft.AspNetCore.Components.Forms
@using Microsoft.AspNetCore.Components.Routing
@using Microsoft.AspNetCore.Components.Web
@using Microsoft.AspNetCore.Components.Web.Virtualization
@using Microsoft.AspNetCore.Components.WebAssembly.Http
@using Microsoft.JSInterop
@using [ProjectName]
@using [ProjectName].Shared
```

### Layout Files

#### `Layout/MainLayout.razor`

```aspnetcorerazor
@inherits LayoutComponentBase

<NavMenu />
<main>
    @Body
</main>
```

#### `Layout/NavMenu.razor`

```aspnetcorerazor
<nav class="bg-white shadow-lg fixed w-full top-0 z-50">
    <div class="max-w-7xl mx-auto px-4">
        <div class="flex justify-between items-center h-16">
            <!-- Logo/Brand -->
            <div class="flex-shrink-0">
                <a href="#hero" class="text-xl font-bold text-gray-800">[Your Brand]</a>
            </div>

            <!-- Desktop Navigation -->
            <div class="hidden md:block">
                <div class="ml-10 flex items-baseline space-x-4">
                    <a href="#hero" class="nav-link">Home</a>
                    <a href="#custom1" class="nav-link">Section 1</a>
                    <a href="#custom2" class="nav-link">Section 2</a>
                    <a href="#contact" class="nav-link">Contact</a>
                </div>
            </div>

            <!-- Mobile menu button -->
            <div class="md:hidden">
                <button @onclick="ToggleMenu" class="text-gray-800 hover:text-gray-600 focus:outline-none">
                    <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path class="@(isMenuOpen ? "hidden" : "inline-flex")" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        <path class="@(isMenuOpen ? "inline-flex" : "hidden")" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>

        <!-- Mobile Navigation -->
        <div class="@(isMenuOpen ? "block" : "hidden") md:hidden">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="#hero" class="mobile-nav-link" @onclick="CloseMenu">Home</a>
                <a href="#custom1" class="mobile-nav-link" @onclick="CloseMenu">Section 1</a>
                <a href="#custom2" class="mobile-nav-link" @onclick="CloseMenu">Section 2</a>
                <a href="#contact" class="mobile-nav-link" @onclick="CloseMenu">Contact</a>
            </div>
        </div>
    </div>
</nav>

@code {
    private bool isMenuOpen = false;

    private void ToggleMenu()
    {
        isMenuOpen = !isMenuOpen;
    }

    private void CloseMenu()
    {
        isMenuOpen = false;
    }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            await JSRuntime.InvokeVoidAsync("addSmoothScrolling");
        }
    }

    [Inject]
    private IJSRuntime JSRuntime { get; set; } = default!;
}
```

### Page Files

#### `Pages/Home.razor`

```aspnetcorerazor
@page "/"

<Hero />
<CustomSection1 />
<CustomSection2 />
<Contact />
```

### Component Files

#### `Shared/Hero.razor`

```aspnetcorerazor
@namespace [ProjectName].Shared

<section id="hero" class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700 text-white pt-16">
    <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
            <span class="block">[Main Heading]</span>
            <span class="block text-yellow-300">[Highlighted Text]</span>
            <span class="block text-lg md:text-xl font-normal mt-2">[Subtitle]</span>
        </h1>
        
        <p class="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            [Your description or tagline goes here. Customize this section as needed.]
        </p>
        
        <div class="space-x-4">
            <a href="#contact" class="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-300">
                [Button 1 Text]
            </a>
            <a href="#custom1" class="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-300">
                [Button 2 Text]
            </a>
        </div>
    </div>
</section>
```

#### `Shared/CustomSection1.razor`

```aspnetcorerazor
@namespace [ProjectName].Shared

<section id="custom1" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">[Section 1 Title - About Us/Services/Features]</h2>
            
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h3 class="text-2xl font-semibold mb-4 text-gray-800">[Left Column Title]</h3>
                    <p class="text-gray-600 mb-4">
                        [Add your business description, story, or key information here. This section is completely 
                        flexible and can describe your company, mission, values, or main services.]
                    </p>
                    <p class="text-gray-600 mb-6">
                        [Add more details about what makes your business unique, your experience, 
                        or additional information that potential customers should know.]
                    </p>
                    <a href="#contact" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 inline-block">
                        [Call to Action Button]
                    </a>
                </div>
                
                <div>
                    <h3 class="text-2xl font-semibold mb-6 text-gray-800">[Right Column Title - Features/Benefits]</h3>
                    <div class="space-y-4">
                        <div class="flex items-start">
                            <div class="bg-blue-600 text-white p-2 rounded-lg mr-4 flex-shrink-0">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                            <div>
                                <h4 class="font-semibold text-gray-800">[Feature/Benefit 1]</h4>
                                <p class="text-gray-600">[Brief description of this feature or benefit]</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <div class="bg-green-600 text-white p-2 rounded-lg mr-4 flex-shrink-0">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                            <div>
                                <h4 class="font-semibold text-gray-800">[Feature/Benefit 2]</h4>
                                <p class="text-gray-600">[Brief description of this feature or benefit]</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <div class="bg-purple-600 text-white p-2 rounded-lg mr-4 flex-shrink-0">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                            <div>
                                <h4 class="font-semibold text-gray-800">[Feature/Benefit 3]</h4>
                                <p class="text-gray-600">[Brief description of this feature or benefit]</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
```

#### `Shared/CustomSection2.razor`

```aspnetcorerazor
@namespace [ProjectName].Shared

<section id="custom2" class="py-20 bg-white">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">[Section 2 Title - Services/Products/Offerings]</h2>
        
        <div class="max-w-6xl mx-auto">
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Service/Product 1 -->
                <div class="text-center bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                    <div class="bg-blue-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold mb-4 text-gray-800">[Service/Product 1]</h3>
                    <p class="text-gray-600 mb-4">[Brief description of your first service or product offering]</p>
                    <ul class="text-left space-y-2">
                        <li class="flex items-center text-gray-600">
                            <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                            [Key feature or benefit 1]
                        </li>
                        <li class="flex items-center text-gray-600">
                            <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                            [Key feature or benefit 2]
                        </li>
                        <li class="flex items-center text-gray-600">
                            <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                            [Key feature or benefit 3]
                        </li>
                    </ul>
                </div>

                <!-- Service/Product 2 -->
                <div class="text-center bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                    <div class="bg-green-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold mb-4 text-gray-800">[Service/Product 2]</h3>
                    <p class="text-gray-600 mb-4">[Brief description of your second service or product offering]</p>
                    <ul class="text-left space-y-2">
                        <li class="flex items-center text-gray-600">
                            <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                            [Key feature or benefit 1]
                        </li>
                        <li class="flex items-center text-gray-600">
                            <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                            [Key feature or benefit 2]
                        </li>
                        <li class="flex items-center text-gray-600">
                            <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                            [Key feature or benefit 3]
                        </li>
                    </ul>
                </div>

                <!-- Service/Product 3 -->
                <div class="text-center bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                    <div class="bg-purple-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold mb-4 text-gray-800">[Service/Product 3]</h3>
                    <p class="text-gray-600 mb-4">[Brief description of your third service or product offering]</p>
                    <ul class="text-left space-y-2">
                        <li class="flex items-center text-gray-600">
                            <span class="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                            [Key feature or benefit 1]
                        </li>
                        <li class="flex items-center text-gray-600">
                            <span class="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                            [Key feature or benefit 2]
                        </li>
                        <li class="flex items-center text-gray-600">
                            <span class="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                            [Key feature or benefit 3]
                        </li>
                    </ul>
                </div>
            </div>
            
            <!-- Optional Call to Action -->
            <div class="text-center mt-12">
                <p class="text-lg text-gray-600 mb-6">[Add a call to action or additional information here]</p>
                <a href="#contact" class="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 inline-block font-semibold">
                    [Contact Button Text]
                </a>
            </div>
        </div>
    </div>
</section>
```

#### `Shared/Contact.razor`

```aspnetcorerazor
@namespace [ProjectName].Shared

<section id="contact" class="py-20 bg-white">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Get In Touch</h2>
        
        <div class="max-w-4xl mx-auto">
            <div class="grid md:grid-cols-2 gap-12">
                <!-- Contact Info -->
                <div>
                    <h3 class="text-2xl font-semibold mb-6 text-gray-800">Let's Connect</h3>
                    <p class="text-gray-600 mb-8">
                        [Add your personal message about wanting to connect, collaborate, or work together.]
                    </p>
                    
                    <div class="space-y-4">
                        <div class="flex items-center">
                            <div class="bg-blue-600 text-white p-2 rounded-lg mr-4">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                </svg>
                            </div>
                            <div>
                                <h4 class="font-semibold text-gray-800">Email</h4>
                                <p class="text-gray-600">[your.email@example.com]</p>
                            </div>
                        </div>
                        
                        <div class="flex items-center">
                            <div class="bg-purple-600 text-white p-2 rounded-lg mr-4">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                </svg>
                            </div>
                            <div>
                                <h4 class="font-semibold text-gray-800">LinkedIn</h4>
                                <p class="text-gray-600">[Your LinkedIn Profile]</p>
                            </div>
                        </div>
                        
                        <div class="flex items-center">
                            <div class="bg-green-600 text-white p-2 rounded-lg mr-4">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                </svg>
                            </div>
                            <div>
                                <h4 class="font-semibold text-gray-800">GitHub</h4>
                                <p class="text-gray-600">[Your GitHub Profile]</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Contact Form -->
                <div>
                    <form class="space-y-6">
                        <div>
                            <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Name</label>
                            <input type="text" id="name" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name">
                        </div>
                        
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                            <input type="email" id="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="your.email@example.com">
                        </div>
                        
                        <div>
                            <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                            <textarea id="message" rows="4" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your message here..."></textarea>
                        </div>
                        
                        <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
```

### wwwroot Files

#### `wwwroot/index.html`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>[Your Site Title]</title>
    <base href="/" />
    
    <!-- Tailwind CSS -->
    <link href="tailwind.css" rel="stylesheet">
    
    <!-- Component CSS -->
    <link href="Assets/css/app.css" rel="stylesheet">
    <link href="Assets/css/global.css" rel="stylesheet">
    <link href="Assets/css/MainLayout.css" rel="stylesheet">
    <link href="Assets/css/NavMenu.css" rel="stylesheet">
    <link href="Assets/css/Hero.css" rel="stylesheet">
    <link href="Assets/css/CustomSection1.css" rel="stylesheet">
    <link href="Assets/css/CustomSection2.css" rel="stylesheet">
    <link href="Assets/css/Contact.css" rel="stylesheet">
</head>

<body>
    <div id="app"></div>

    <script src="_framework/blazor.webassembly.js"></script>
    <script src="Assets/js/navigation.js"></script>
</body>

</html>
```

#### `wwwroot/Assets/css/global.css`

```css
/* Global CSS - Simple and Clean */
:root {
    --primary-color: #3b82f6;
    --secondary-color: #8b5cf6;
    --accent-color: #10b981;
    --background-color: #ffffff;
    --text-primary: #1f2937;
    --text-secondary: #6b7280;
    --border-color: #e5e7eb;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    line-height: 1.6;
    color: var(--text-primary);
    background-color: white;
    scroll-behavior: smooth;
}

/* GLOBAL WHITE BACKGROUND SYSTEM */
/* All sections start with white background by default */
/* Individual sections can override this in their specific CSS files */
section {
    background-color: white;
}

/* This ensures every section gets white background unless specifically overridden */
#hero,
#custom1, 
#custom2,
#contact {
    background-color: white;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}

/* Utility Classes */
.btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    cursor: pointer;
    border: none;
}

.btn-primary {
    background-color: var(--primary-color);
    color: white;
}

.btn-primary:hover {
    background-color: #2563eb;
    transform: translateY(-2px);
}

.card {
    background: white;
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

/* Responsive Design */
@media (max-width: 768px) {
    .container {
        padding: 0 1rem;
    }
}
```

#### `wwwroot/Assets/js/navigation.js`

```javascript
// Simple smooth scrolling for navigation links
function addSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    addSmoothScrolling();
});
```

### Individual Component CSS Files

Each component should have its own CSS file in `/Assets/css/` for easy customization:

#### `wwwroot/Assets/css/app.css`

```css
/* App-wide CSS - Extends global styles and imports */
@import 'global.css';

/* App-specific styles and overrides */
.app-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

main {
    flex: 1;
}

/* Additional app-wide styles can be added here */
```

#### `wwwroot/Assets/css/MainLayout.css`

```css
/* MainLayout specific styles */
.app-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

main {
    flex: 1;
}

/* Layout-specific styles */
```

#### `wwwroot/Assets/css/NavMenu.css`

```css
/* NavMenu specific styles - Override global backgrounds if needed */
nav {
    /* Default white background, can be overridden */
    background-color: white;
    
    /* Example overrides: */
    /* background-color: rgba(255, 255, 255, 0.95); */ /* Semi-transparent */
    /* background: linear-gradient(90deg, #ffffff 0%, #f8fafc 100%); */ /* Gradient */
    /* backdrop-filter: blur(10px); */ /* Glass effect */
}

/* Navigation link styles */
.nav-link {
    @apply text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300;
}

.nav-link:hover {
    background-color: rgba(59, 130, 246, 0.1);
}

.mobile-nav-link {
    @apply text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300;
}

.mobile-nav-link:hover {
    background-color: rgba(59, 130, 246, 0.1);
}

/* Mobile menu styling */
.mobile-menu {
    background-color: white;
    border-top: 1px solid #e5e7eb;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Brand/Logo styling */
.nav-brand {
    font-weight: 700;
    font-size: 1.25rem;
    color: #1f2937;
    text-decoration: none;
    transition: color 0.3s ease;
}

.nav-brand:hover {
    color: #3b82f6;
}

/* Hamburger menu button */
.mobile-menu-button {
    padding: 0.5rem;
    border-radius: 6px;
    transition: background-color 0.3s ease;
}

.mobile-menu-button:hover {
    background-color: rgba(107, 114, 128, 0.1);
}

/* Active navigation link */
.nav-link.active,
.mobile-nav-link.active {
    color: #3b82f6;
    background-color: rgba(59, 130, 246, 0.1);
}

/* Custom navbar styles can be added here */
/* Example: Sticky navigation with background change on scroll */
.nav-scrolled {
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
```

#### `wwwroot/Assets/css/Hero.css`

```css
/* Hero section specific styles - Overrides global white background */
#hero {
    /* Example: Override global white background with gradient */
    background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
    
    /* You can also use solid colors, images, or any other background */
    /* background-color: #1f2937; */
    /* background-image: url('/Assets/images/hero-bg.jpg'); */
    /* background-size: cover; */
    /* background-position: center; */
}

/* Additional hero-specific styles */
#hero h1 {
    /* Custom hero heading styles */
}

#hero .hero-button {
    /* Custom button styles for hero section */
}

/* Custom hero animations, gradients, etc. */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

#hero .animate-fade-in {
    animation: fadeInUp 1s ease-out;
}
```

#### `wwwroot/Assets/css/CustomSection1.css`

```css
/* Custom Section 1 specific styles - Overrides global white background */
#custom1 {
    /* Example: Override global white background with light gray */
    background-color: #f9fafb;
    
    /* You can also use gradients, images, or patterns */
    /* background: linear-gradient(45deg, #f0f9ff 0%, #e0e7ff 100%); */
    /* background-image: url('/Assets/images/section1-bg.jpg'); */
    /* background-size: cover; */
}

/* Section-specific component styles */
#custom1 .feature-card {
    background: white;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

#custom1 .feature-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

/* Custom styles for this section only */
#custom1 .section-icon {
    width: 3rem;
    height: 3rem;
    border-radius: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
```

#### `wwwroot/Assets/css/CustomSection2.css`

```css
/* Custom Section 2 specific styles - Keeps global white background or override */
#custom2 {
    /* Example: Keep global white background (default) */
    /* background-color: white; */ /* This is already set by global.css */
    
    /* Or override with custom background */
    /* background-color: #f8fafc; */
    /* background: linear-gradient(180deg, #ffffff 0%, #f1f5f9 100%); */
    /* background-image: url('/Assets/images/section2-pattern.svg'); */
}

/* Service/Product card styles specific to this section */
#custom2 .service-card {
    background: #f9fafb;
    border-radius: 12px;
    padding: 2rem;
    transition: all 0.3s ease;
    border: 1px solid #e5e7eb;
}

#custom2 .service-card:hover {
    background: white;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
    border-color: #d1d5db;
}

/* Service icon container */
#custom2 .service-icon {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1rem;
}

/* Custom bullet points for service features */
#custom2 .service-feature {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
}

#custom2 .service-feature::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 12px;
    flex-shrink: 0;
}
```

#### `wwwroot/Assets/css/Contact.css`

```css
/* Contact section specific styles - Override background if needed */
#contact {
    /* Example: Keep white background or override */
    /* background-color: white; */ /* Default from global.css */
    
    /* Or override with custom background */
    /* background-color: #f8fafc; */
    /* background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%); */
    /* background-image: url('/Assets/images/contact-bg.jpg'); */
    /* background-size: cover; */
    /* background-position: center; */
}

/* Contact form styling */
.contact-form {
    background: #f9fafb;
    border-radius: 12px;
    padding: 2rem;
    border: 1px solid #e5e7eb;
}

/* Form input styles */
#contact input,
#contact textarea {
    border: 2px solid #e5e7eb;
    border-radius: 8px;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

#contact input:focus,
#contact textarea:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    outline: none;
}

/* Contact info cards */
#contact .contact-info-item {
    background: white;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    border: 1px solid #f3f4f6;
    transition: all 0.3s ease;
}

#contact .contact-info-item:hover {
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
}

/* Contact icon styles */
#contact .contact-icon {
    width: 3rem;
    height: 3rem;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
}

/* Submit button hover effect */
#contact .submit-button {
    transition: all 0.3s ease;
}

#contact .submit-button:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}
```

### Properties/launchSettings.json

```json
{
  "iisSettings": {
    "windowsAuthentication": false,
    "anonymousAuthentication": true,
    "iisExpress": {
      "applicationUrl": "http://localhost:63353",
      "sslPort": 0
    }
  },
  "profiles": {
    "http": {
      "commandName": "Project",
      "dotnetRunMessages": true,
      "launchBrowser": true,
      "inspectUri": "{wsProtocol}://{url.hostname}:{url.port}/_framework/debug/ws-proxy?browser={browserInspectUri}",
      "applicationUrl": "http://localhost:5000",
      "environmentVariables": {
        "ASPNETCORE_ENVIRONMENT": "Development"
      }
    },
    "IIS Express": {
      "commandName": "IISExpress",
      "launchBrowser": true,
      "inspectUri": "{wsProtocol}://{url.hostname}:{url.port}/_framework/debug/ws-proxy?browser={browserInspectUri}",
      "environmentVariables": {
        "ASPNETCORE_ENVIRONMENT": "Development"
      }
    }
  }
}
```

## Build and Run Instructions

1. Install .NET 9 SDK
2. Install Node.js and npm
3. Clone/create the project with the above structure
4. Run `npm install` to install Tailwind CSS dependencies
5. Run `npm run build-css` to build Tailwind CSS
6. Run `dotnet run` to start the development server

## Customization Guide

### Adding/Removing Sections

1. **To add a new section:**
   - Create a new `.razor` file in the `Shared` folder (e.g., `CustomSection3.razor`)
   - Add the corresponding CSS file in `/Assets/css/` (e.g., `CustomSection3.css`)
   - Include the CSS file in `index.html`
   - Add the component to `Home.razor`
   - Update navigation links in `NavMenu.razor`

2. **To remove a section:**
   - Remove the component from `Home.razor`
   - Remove the navigation link from `NavMenu.razor`
   - Delete the `.razor` and `.css` files
   - Remove the CSS link from `index.html`

### Project Cleanup

When creating the project, make sure to:
- Remove the `SampleData` folder from project root (done automatically in setup step 1)
- Remove the `sample-data` folder from `wwwroot` (done automatically in setup step 5)
- Remove the `lib` folder from `wwwroot` (not needed)
- Remove any PNG/ICO files from `wwwroot` (favicon.png, icon-192.png, etc.)
- **IMPORTANT**: Remove ALL `.css` files from `Layout` folder - Layout folder should contain ONLY `.razor` files
- Move any existing CSS files from Layout folder to `Assets/css/` folder
- Keep only necessary files in `wwwroot` (index.html, generated tailwind.css, Assets folder)
- Organize all CSS files in `Assets/css/` folder
- Keep Layout folder clean with only `.razor` files (MainLayout.razor, NavMenu.razor)
- Ensure CSS files are NOT in Layout folder

### Styling

- Use Tailwind utility classes for quick styling
- Add custom styles in the individual component CSS files
- Modify CSS variables in `global.css` for site-wide color changes
- Each section is completely independent and customizable

### Background Customization System

The template uses a **global white background system** where every section starts white and can be individually customized:

#### How it works:
1. **Global Default**: `global.css` sets `background-color: white` for ALL sections by default
2. **Section Override**: Any section can override this by adding background styles in its own CSS file
3. **Specificity**: Section-specific CSS files have higher specificity and will override the global white
4. **Clean Start**: Every new section automatically gets white background without any extra code

#### Examples:

**Keep Default White Background:**
```css
/* In any section CSS file - NO background style needed! */
#your-section {
    /* Just add other styles - background stays white automatically */
    padding: 2rem;
    /* White background is inherited from global.css */
}
```

**Override with Red Background (as per your example):**
```css
#hero {
    background-color: red; /* Overrides global white */
}
```

**Override with Solid Color:**
```css
#your-section {
    background-color: #f9fafb; /* Light gray overrides white */
}
```

**Override with Gradient:**
```css
#hero {
    background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
    /* Completely replaces white background */
}
```

**Override with Image:**
```css
#your-section {
    background-image: url('/Assets/images/section-bg.jpg');
    background-size: cover;
    background-position: center;
    /* White background is replaced with image */
}
```

This system gives you **maximum flexibility** - every section starts clean and white, customize only what you need!

### Content

- Replace all `[Placeholder Text]` with your actual content
- Modify section IDs and navigation links as needed
- Customize the navbar brand name and links
- Add your own images, forms, or other components

### File Organization

- **Layout folder**: Contains ONLY `.razor` files (MainLayout.razor, NavMenu.razor) - **NO CSS FILES**
- **Assets/css folder**: Contains ALL CSS files including MainLayout.css and NavMenu.css
- **wwwroot folder**: Contains only index.html, generated tailwind.css, and Assets folder
- **No sample-data folder**: Removed from both project root and wwwroot
- **No lib folder**: Removed as it's not needed for this template
- **No PNG/ICO files**: Clean wwwroot without unnecessary icon files
- **Modular CSS**: Each component has its own CSS file in Assets/css/
- **CSS imports**: The `app.css` file imports global styles and extends them
- **Individual component CSS files**: Allow for modular styling and easy customization

**CRITICAL**: The Layout folder should look like this:
```
Layout/
├── MainLayout.razor  ✅
└── NavMenu.razor     ✅
```

**NOT like this:**
```
Layout/
├── MainLayout.razor  ✅
├── MainLayout.css    ❌ (should be in Assets/css/)
├── NavMenu.razor     ✅
└── NavMenu.css       ❌ (should be in Assets/css/)
```

This template provides a clean foundation that you can easily build upon!
