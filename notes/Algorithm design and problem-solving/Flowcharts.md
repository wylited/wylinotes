Every flowchart starts and ends with a terminator.

Decisions always have 2 labelled arrows, one going down and one going to the right.
- Right side is always *no*.
- down is always *yes*.

Data flow lines always connect data flow lines.

```mermaid
graph TD;
	A(Start) --> B{Decision};
	B --> |Yes| C[/"Take input"/];
	C --> H["Save Input"]
	H --> G(End)
	subgraph " ";
		B --> |No| D[Do something];
		D --> E["|Subroutine|"];
		E --> F[/"Output something"/]
		F --> G
	end;
	
 ```
 