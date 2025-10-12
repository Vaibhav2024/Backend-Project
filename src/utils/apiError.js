class ApiError extends Error {
    constructor(statusCode, message= "Something went wrong", errors = [], statck = ""){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.errors = errors

        if (statck) {
            this.stack = statck
        }else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}


// Instead of saying “Oops, something went wrong” in random ways, you put:

// statusCode (like 404, 500)

// message (“User not found”)

// success = false

// Optional extra info

// It’s like writing a uniform error message template.