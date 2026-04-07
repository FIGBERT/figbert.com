Manage bookmarks [default alias: b]

See [`jj help -k bookmarks`] for more information.

[`jj help -k bookmarks`]: https://docs.jj-vcs.dev/latest/bookmarks

[1m[33mUsage:[0m [1m[32mjj bookmark[0m [32m[OPTIONS][0m [32m<COMMAND>[0m

[1m[33mCommands:[0m
  [1m[32madvance[0m  Advance the closest bookmarks to a target revision [aliases: a]
  [1m[32mcreate[0m   Create a new bookmark [aliases: c]
  [1m[32mdelete[0m   Delete an existing bookmark and propagate the deletion to remotes on the next push [aliases: d]
  [1m[32mforget[0m   Forget a bookmark without marking it as a deletion to be pushed [aliases: f]
  [1m[32mlist[0m     List bookmarks and their targets [aliases: l]
  [1m[32mmove[0m     Move existing bookmarks to target revision [aliases: m]
  [1m[32mrename[0m   Rename `old` bookmark name to `new` bookmark name [aliases: r]
  [1m[32mset[0m      Create a new bookmark, or update an existing one by name [aliases: s]
  [1m[32mtrack[0m    Start tracking given remote bookmarks [aliases: t]
  [1m[32muntrack[0m  Stop tracking given remote bookmarks

[1m[33mOptions:[0m
  [1m[32m-h[0m, [1m[32m--help[0m
          Print help (see a summary with '-h')

[1m[33mGlobal Options:[0m
  [1m[32m-R[0m, [1m[32m--repository[0m[32m [0m[32m<REPOSITORY>[0m
          Path to repository to operate on
          
          By default, Jujutsu searches for the closest .jj/ directory in an ancestor of the current working directory.

      [1m[32m--ignore-working-copy[0m
          Don't snapshot the working copy, and don't update it
          
          By default, Jujutsu snapshots the working copy at the beginning of every command. The working copy is also updated at the end of the command, if
          the command modified the working-copy commit (`@`). If you want to avoid snapshotting the working copy and instead see a possibly stale
          working-copy commit, you can use `--ignore-working-copy`. This may be useful e.g. in a command prompt, especially if you have another process
          that commits the working copy.
          
          Loading the repository at a specific operation with `--at-operation` implies `--ignore-working-copy`.

      [1m[32m--ignore-immutable[0m
          Allow rewriting immutable commits
          
          By default, Jujutsu prevents rewriting commits in the configured set of immutable commits. This option disables that check and lets you rewrite
          any commit but the root commit.
          
          This option only affects the check. It does not affect the `immutable_heads()` revset or the `immutable` template keyword.

      [1m[32m--at-operation[0m[32m [0m[32m<AT_OPERATION>[0m
          Operation to load the repo at
          
          Operation to load the repo at. By default, Jujutsu loads the repo at the most recent operation, or at the merge of the divergent operations if
          any.
          
          You can use `--at-op=<operation ID>` to see what the repo looked like at an earlier operation. For example `jj --at-op=<operation ID> st` will
          show you what `jj st` would have shown you when the given operation had just finished. `--at-op=@` is pretty much the same as the default except
          that divergent operations will never be merged.
          
          Use `jj op log` to find the operation ID you want. Any unambiguous prefix of the operation ID is enough.
          
          When loading the repo at an earlier operation, the working copy will be ignored, as if `--ignore-working-copy` had been specified.
          
          It is possible to run mutating commands when loading the repo at an earlier operation. Doing that is equivalent to having run concurrent
          commands starting at the earlier operation. There's rarely a reason to do that, but it is possible.
          
          [aliases: --at-op]

      [1m[32m--debug[0m
          Enable debug logging

      [1m[32m--color[0m[32m [0m[32m<WHEN>[0m
          When to colorize output
          
          [possible values: always, never, debug, auto]

      [1m[32m--quiet[0m
          Silence non-primary command output
          
          For example, `jj file list` will still list files, but it won't tell you if the working copy was snapshotted or if descendants were rebased.
          
          Warnings and errors will still be printed.

      [1m[32m--no-pager[0m
          Disable the pager

      [1m[32m--config[0m[32m [0m[32m<NAME=VALUE>[0m
          Additional configuration options (can be repeated)
          
          The name should be specified as TOML dotted keys. The value should be specified as a TOML expression. If string value isn't enclosed by any TOML
          constructs (such as array notation), quotes can be omitted.

      [1m[32m--config-file[0m[32m [0m[32m<PATH>[0m
          Additional configuration files (can be repeated)
