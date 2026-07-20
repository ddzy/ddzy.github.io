<script setup lang="ts">
import { ref } from 'vue';
import ProjectCard from './components/ProjectCard.vue';
import { personalProjects } from './data/projects';

const username = ref('DDZY')
</script>

<template>
	<main class="page-shell min-h-screen overflow-hidden px-5 py-6 sm:px-8 sm:py-10">
		<div class="mx-auto w-full max-w-6xl">
			<header class="flex items-center justify-between">
				<a class="brand text-sm font-semibold tracking-[0.12em] text-[var(--color-ink)]" href="/">
					{{ username }}
				</a>
				<a href="https://github.com/ddzy" target="_blank" rel="noopener noreferrer"
					class="inline-flex items-center gap-2 rounded-full border border-[var(--color-panel-border)] bg-white/70 px-4 py-2 text-sm font-medium text-[var(--color-ink)] shadow-sm transition hover:border-[#9bc7bf] hover:bg-white hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]">
					GitHub <span aria-hidden="true">↗</span>
				</a>
			</header>

			<section class="resume-feature mt-8 mb-12 sm:mt-12 sm:mb-16" aria-labelledby="resume-title">
				<a
					href="https://resume.yyge.top"
					target="_blank"
					rel="noopener noreferrer"
					class="group relative block overflow-hidden rounded-[2rem] bg-[var(--color-primary-dark)] px-7 py-9 shadow-[0_22px_46px_rgba(18,59,58,0.25)] transition duration-200 hover:-translate-y-1 hover:bg-[#164b48] hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)] sm:px-10 sm:py-11"
				>
					<span
						class="absolute -right-10 -top-12 h-48 w-48 rounded-full border border-white/15 transition duration-300 group-hover:scale-110"
						aria-hidden="true"
					></span>
					<span
						class="absolute -bottom-20 right-24 h-36 w-36 rounded-full bg-[var(--color-primary)]/25 blur-2xl"
						aria-hidden="true"
					></span>
					<div class="relative flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
						<div>
							<p class="mb-3 text-xs font-semibold tracking-[0.16em] text-[#b9dfd9] uppercase">
								Resume
							</p>
							<h2 id="resume-title" class="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
								在线简历
							</h2>
						</div>
						<span class="inline-flex items-center gap-2 text-sm font-semibold text-white">
							查看简历 <span class="text-xl transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
						</span>
					</div>
				</a>
			</section>

			<section class="project-section" aria-labelledby="projects-title">
				<div class="mb-8 flex items-end justify-between gap-5 sm:mb-10">
					<div>
						<h1 id="projects-title"
							class="text-2xl font-semibold tracking-[-0.04em] text-[var(--color-ink)] sm:text-3xl">
							个人项目
						</h1>
					</div>
				</div>

				<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
					<ProjectCard v-for="project in personalProjects" :key="project.name" :project="project" />
				</div>
			</section>

			<footer
				class="mt-10 flex items-center justify-between border-t border-[var(--color-panel-border)] py-6 text-xs text-[var(--color-muted)]">
				<span>© {{ new Date().getFullYear() }} {{ username }}</span>
			</footer>
		</div>
	</main>
</template>
