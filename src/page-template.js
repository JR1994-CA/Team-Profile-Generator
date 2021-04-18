//create function that takes in an array of employees

const generatePage = employees => {


    let output = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <!-- CSS only -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    </head>
    
    <body>
        <div class="container">
            <div class="row" style="height: 80px;">
    
                <div class="col-12">
                    <h1 class="text-center">
                        employees
                    </h1>
    
                </div>
    
            </div>
            <div class="row">`;

    // Loop over all employees
    // output += employee card with info

    const manager = manager => {
        return `
                <div class="col-4">
                    <div class="row">
                        <div class="col-12">
                            <h2>Name: ${manager.getName()}</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <h2>Role: ${manager.getId()}</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="row">
                                <div class="col-12">
                                    <p>email: ${manager.getEmail()}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <p>id</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <p>wildcard: ${manager.getOfficeNumber()}</p>
                                </div>
                            </div>
                        </div>
                    </div>
    
                </div>`
    }
    const engineer = engineer => {
        return `
                <div class="col-4">
                    <div class="row">
                        <div class="col-12">
                            <h2>Name: ${engineer.getName()}</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <h2>Role: ${engineer.getId()}</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="row">
                                <div class="col-12">
                                    <p>email: ${engineer.getEmail()}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <p>id</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <p>wildcard: ${engineer.getGitHub()}</p>
                                </div>
                            </div>
                        </div>
                    </div>
    
                </div>`
    }

    const intern = intern => {
        return `
            <div class="col-4">
                <div class="row">
                    <div class="col-12">
                        <h2>Name: ${intern.getName()}</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <h2>Role: ${intern.getId()}</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="row">
                            <div class="col-12">
                                <p>email: ${intern.getEmail()}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <p>id</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <p>wildcard: ${intern.getSchool()}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>`
    }




    output += `        <!--end of employee card-->
            </div>
    
    
        </div>
    
    </body>
    
    </html>`
    return output;


}