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
    
            employees.forEach(employee => {
                const card = `<div class="col-4">
                <div class="row">
                    <div class="col-12">
                        <h2>Name: ${employee.name}</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <h2>Role: ${employee.id}</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="row">
                            <div class="col-12">
                                <p>email: ${employee.email}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <p>id</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <p>wildcard: ${employee.wildcard}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>`
            })




            output += `        <!--end of employee card-->
            </div>
    
    
        </div>
    
    </body>
    
    </html>`
    return output;


}