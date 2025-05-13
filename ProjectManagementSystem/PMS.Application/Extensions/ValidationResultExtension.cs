using FluentValidation.Results;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMS.Application.Extensions
{
    public static class ValidationResultExtension
    {
        public static void Check(this ValidationResult result) 
        {
            if (result.Errors.Any()) 
            {
                var errorMessages = string.Join("; ", result.Errors.Select(e => e.ErrorMessage));
                throw new Exception(errorMessages);
            }
        }
    }
}
