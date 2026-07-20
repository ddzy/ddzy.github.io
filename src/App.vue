<script setup lang="ts">
import ProjectCard from './components/ProjectCard.vue';
import { personalProjects } from './data/projects';
</script>

<template>
	<main class="page-shell min-h-screen overflow-hidden px-5 py-6 sm:px-8 sm:py-10">
		<div class="mx-auto w-full max-w-6xl">
			<header class="flex items-center justify-between">
				<a class="brand text-sm font-semibold tracking-[0.12em] text-[var(--color-ink)]" href="/">
					DDZY
				</a>
				<a
					href="https://github.com/ddzy"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 rounded-full border border-[var(--color-panel-border)] bg-white/70 px-4 py-2 text-sm font-medium text-[var(--color-ink)] shadow-sm transition hover:border-[#9bc7bf] hover:bg-white hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
				>
					GitHub <span aria-hidden="true">↗</span>
				</a>
			</header>

			<!-- 个人介绍区域预留，暂不展示内容。 -->
			<section class="profile-reserved" aria-label="个人介绍预留"></section>

			<section class="project-section" aria-labelledby="projects-title">
				<div class="mb-8 flex items-end justify-between gap-5 sm:mb-10">
					<div>
						<p class="mb-3 text-xs font-semibold tracking-[0.16em] text-[var(--color-primary)] uppercase">
							Selected work
						</p>
						<h1 id="projects-title" class="text-3xl font-semibold tracking-[-0.04em] text-[var(--color-ink)] sm:text-4xl">
							个人项目
						</h1>
					</div>
					<span class="hidden text-sm text-[var(--color-muted)] sm:block">
						{{ personalProjects.length }} 个项目入口
					</span>
				</div>

				<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
					<ProjectCard
						v-for="project in personalProjects"
						:key="project.name"
						:project="project"
					/>
				</div>
			</section>

			<footer class="mt-10 flex items-center justify-between border-t border-[var(--color-panel-border)] py-6 text-xs text-[var(--color-muted)]">
				<span>© {{ new Date().getFullYear() }} DDZY</span>
				<span>Built for the web</span>
			</footer>
		</div>
	</main>
</template>
