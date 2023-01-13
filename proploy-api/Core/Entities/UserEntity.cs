using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace proploy_api.Core.Entities
{
    public class UserEntity
    {
        public int Id { get; set; }
        public string? email { get; set; }
        public string? firstname { get; set; }
        public string? lastname { get; set; }
        public DateTime CreatedDate { get; set; }   
    }
}