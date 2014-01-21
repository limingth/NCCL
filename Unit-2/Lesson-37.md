

### 最简单的 C 程序
    
    int main(void)
    {
        return 0;
    }


### 对应的简化版 BNF 范式

    program :  function_definition
    
    function_definition : decl_specs  declarator  compound_stat
    
    decl_specs      : type_spec
    
    type_spec       : 'void' | 'int' 
    
    declarator      : direct_declarator
    
    direct_declarator   : id        
    		| direct_declarator '(' param_type_list ')' 
    
    param_type_list     :  type_spec         
    
    compound_stat       : '{' stat '}'   { 语句表 }
    
    stat            : 'return' exp ';'
    
    exp			: id
    			| const
