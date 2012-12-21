# md2pdf.sh #
use shell scripts `md2pdf.sh` to generate Lesson-x.pdf automatically

	./md2pdf.sh Lesson-1 

then Lesson-1.pdf will be under slides/

# Introduction #
Very good introduction started from here
 http://jeromyanglim.blogspot.com/2012/07/beamer-pandoc-markdown.html

	pandoc -t beamer --slide-level 3 Lesson-1.md -o talk.tex
	xelatex main.tex 

`main.tex` will include talk.tex automatically, main.tex defines the theme

`slide-level 3` means `###`

## Reference #
* http://www.casparant.com/posts/know-how-to-make-a-latex-beamer-template.html
* http://www.hartwork.org/beamer-theme-matrix/
* http://en.wikibooks.org/wiki/LaTeX/Presentations#The_Built-in_solution
