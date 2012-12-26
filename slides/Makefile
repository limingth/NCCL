# example 
# $ make Lesson-1
# $ make Lesson-2

%: 
	make md
	echo building $@ outline md files from README.md
	pandoc -t beamer --slide-level 2 $@-outline.md -o outline.tex
	grep -r "###" ../Unit-1/$@.md -A 100 > $@-talk.md
	pandoc -t beamer --slide-level 3 $@-talk.md -o talk.tex
	xelatex main.tex
	mv main.pdf $@.pdf
	gnome-open $@.pdf

md:
	grep -r Lesson-1.md ../Unit-1/README.md -A 13 > Lesson-1-outline.md
	grep -r Lesson-2.md ../Unit-1/README.md -A 16 > Lesson-2-outline.md
	grep -r Lesson-3.md ../Unit-1/README.md -A 9 > Lesson-3-outline.md
	grep -r Lesson-4.md ../Unit-1/README.md -A 8 > Lesson-4-outline.md

clean:
	rm *.out *.log *.nav *.toc *.vrb *.aux *.snm 
	rm Lesson*.md
