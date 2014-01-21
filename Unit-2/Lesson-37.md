
## Lesson 37 - Parse Tree 语法分析树

### 课程任务
* 根据下面简化的BNF范式，实现对 Lesson 1 中最简单的 C 程序的语法分析，并生成一棵分析树（Parse Tree）。

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
    
    declarator      : id '(' type_spec ')' 
    
    compound_stat   : '{' stat '}' 
    
    stat            : 'return' number ';'

### 参考资料
* http://www.engr.mun.ca/~theo/Misc/exp_parsing.htm
* http://academic.udayton.edu/saverioperugini/courses/cps343/lecture_notes/grammars.html

