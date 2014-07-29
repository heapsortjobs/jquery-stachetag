jquery-stachetag
================

Implement stachetags in your HTMLs lickety-split.

## Stachetags?
[http://blog.heapsortjobs.com/stachetags-we-have-the-solution](http://blog.heapsortjobs.com/stachetags-we-have-the-solution)

## Usage

```
<script>

	// Stachetag all the things
	$('p').stachetag();
	
	// Custom stachetag template!
	// %w is the word represented by the stachetag!
	// %s is the stachetag itself!
	$('p').stachetag(
		stache_template: '<a href="/path/to/stache/%w">%s</a>',
	);
	
	// GRAPHIC STACHES
	$('p').stachetag({
		graphic_staches: true 
	});

</script>
```

## Contribute!

Pull requests welcome.  Integrations encouraged.  Shaving is frowned upon.
